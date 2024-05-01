import axios from "axios";

const instance = axios.create({
  baseURL: "//shorter-production-8fe4.up.railway.app",
  withCredentials: true,
});

export default instance;
