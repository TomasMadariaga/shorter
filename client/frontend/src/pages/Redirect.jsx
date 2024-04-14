// import axios from "axios";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

export const Redirect = () => {
  // const { id } = useParams();
  // useEffect(() => {
  //   const redirect = async () => {
  //     const response = await axios.get(`http://localhost:3000/url/${id}`);
  //     if (!response.data.startsWith("http") && !response.data.startsWith("https")) {
  //       response.data = "https://" + response.data;
  //     }
  //     window.location.href = `${response.data}`
  //   };
  //   redirect();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return <div>Redirecting...
  </div>;
};
