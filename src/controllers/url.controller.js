import url from "url";
import { prisma } from "../db.js";

export const generateShortUrl = async (req, res) => {
  const { url } = req.body;
  const shortUrl = Math.random().toString(36).substring(2, 7);

  try {
    const data = await prisma.link.create({
      data: {
        url,
        shortUrl,
        user_id: req.user.id,
      },
    });
    res.status(200).json({ data });
  } catch (error) {
    return res.status(500).send({ error });
  }
};

export const getLinks = async (req, res) => {
  try {
    const data = await prisma.link.findMany({
      where: {
        user_id: req.user.id,
      },
    });
    res.status(200).json({ data });
  } catch (error) {
    return res.status(500).send({ error });
  }
};

export const getLink = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await prisma.link.findUnique({
      where: {
        shortUrl: id,
      },
    });
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

export const updateShortLinkClick = async (req, res) => {
  try {
    const response = await prisma.link.update({
      where: {
        shortUrl: req.params.id,
      },
      data: { clicks: req.body.clicks + 1 },
    });
    res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const deleteLink = async (req, res) => {
  const deletedLink = await prisma.link.delete({
    where: { id: parseInt(req.params.id) },
  });
  if (!deleteLink) {
    res.status(404).send("Link not found");
  }
  res.json({ deletedLink });
};

export const redirect = async (req, res) => {
  const { id } = req.params;

  const data = await prisma.link.findUnique({
    where: { shortUrl: id },
  });

  if (!data) {
    return res.status(404).json({ message: "URL not Found" });
  }
  const parsedUrl = url.parse(data.url);

  let redirectUrl;

  if (parsedUrl.protocol) {
    redirectUrl = data.url;
  } else {
    redirectUrl = `https://${data.url}`;
  }

  return res.json({redirectUrl})
};
