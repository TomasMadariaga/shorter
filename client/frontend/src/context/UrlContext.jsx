import { createContext, useContext } from "react";
import { generateUrl } from "../api/url";

export const UrlContext = createContext();

export const useUrl = () => {
  const context = useContext(UrlContext);
  if (!context) {
    throw new Error("useUrl must be used within an UrlProvider");
  }
  return context;
};

export const UrlProvider = ({ children }) => {
  const create = async (url) => {
    try {
      const res = await generateUrl(url);
      return res.data.data.shortUrl
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UrlContext.Provider value={{ create }}>{children}</UrlContext.Provider>
  );
};
