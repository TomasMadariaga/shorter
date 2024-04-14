import axios from "./axios";

// export const registerRequest = (user) => axios.post(`/auth/register`, user);

export const generateUrl = (url) => axios.post(`/u`, url)