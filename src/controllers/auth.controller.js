import { prisma } from "../db.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userFound = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });
    if (userFound) {
      return res.status(400).json(["The email is already in use"]);
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: passwordHash,
      },
    });
    // const savedUser = await prisma.user.findUnique({where: {email}})
    // SI NO FUNCIONA PROBAR SELECCIONANDO EL USUARIO GUARDADO DESDE ACA
    const token = await createAccessToken({ id: newUser.id });

    res.cookie("token", token, { domain: ".app", path: "/", secure: true });

    res.json({
      id: newUser.id,
      email: newUser.email,
      username: newUser.username,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!userFound) return res.status(404).json(["User not found"]);

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch) {
      return res.status(400).json(["Invalid Credentials"]);
    }

    const token = await createAccessToken({ id: userFound.id });
    res.cookie("token", token, { domain: ".app", path: "/", secure: true });

    res.json({
      id: userFound.id,
      email: userFound.email,
      username: userFound.username,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const logout = async (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });

  req.session.destroy()
  return res.sendStatus(200);
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });

    const userFound = await prisma.user.findUnique({ where: { id: user.id } });
    if (!userFound) return res.status(401).json({ message: "Unauthorized" });
    return res.json({
      id: userFound.id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};
