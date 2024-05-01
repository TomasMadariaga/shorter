import axios from "axios";

const instance = axios.create({
  baseURL: "shorter.railway.internal",
  withCredentials: true,
});

export default instance;
