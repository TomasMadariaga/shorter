import axios from "axios";

const instance = axios.create({
  baseURL: "https://shorter-production-8fe4.up.railway.app",
  withCredentials: true,
  method: 'GET,HEAD,PUT,PATCH,POST,DELETE'
});

export default instance;
