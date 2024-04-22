import { createContext, useContext, useState } from "react";
import { generateUrl, getUrl, deleteUrl } from "../api/url";

export const UrlContext = createContext();

export const useUrl = () => {
  const context = useContext(UrlContext);
  if (!context) {
    throw new Error("useUrl must be used within an UrlProvider");
  }
  return context;
};

export const UrlProvider = ({ children }) => {
  const [errors, setErrors] = useState([]);

  const create = async (url) => {
    try {
      const res = await generateUrl(url);
      return res.data.data.shortUrl;
    } catch (error) {
      console.log(error);
      setErrors([error.response.data.message]);
    }
  };

  const get = async () => {
    try {
      const res = await getUrl();
      return res.data.data;
    } catch (error) {
      console.log(error);
      setErrors([error.response.data.message]);
    }
  };

  const deleteLink = async (id) => {
    try {
      const res = await deleteUrl(id);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UrlContext.Provider value={{ create, get, deleteLink, errors }}>
      {children}
    </UrlContext.Provider>
  );
};
