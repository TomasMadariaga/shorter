import axios from "axios";

const instance = axios.create({
  baseURL: "https://railway.app/project/fcf5d632-f142-47e5-b7dd-217ce9820043/service/cd32d017-e2e8-4f86-a747-f942a4f204b9",
  withCredentials: true,
});

export default instance;
