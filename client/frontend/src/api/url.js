import axios from "./axios";

// export const registerRequest = (user) => axios.post(`/auth/register`, user);

export const generateUrl = (url) => axios.post(`/u`, url);

export const getUrl = () => axios.get(`/u/get`);

export const deleteUrl = (id) => axios.delete(`/u/${id}`);
