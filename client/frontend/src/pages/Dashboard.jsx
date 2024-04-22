import { useEffect, useState } from "react";
import { useUrl } from "../context/UrlContext";

export const Dashboard = () => {
  const [url, setUrl] = useState([]);
  const { get, deleteLink } = useUrl();

  useEffect(() => {
    const getUrl = async () => {
      const data = await get();
      setUrl(data);
    };
    getUrl();
  }, [url]);
  return (
    <div className="bg-gray-700 h-4/5">
      <h1 className="text-white text-center py-5 font-bold">My URLs</h1>
      <div className="p-6 grid grid-cols-4 gap-4 mx-10">
        {url &&
          url.map((link, i) => (
            <div
              className="bg-gray-800 grid rounded-md p-4 border shadow-md shadow-gray-900"
              key={link.id}
            >
              <div className="flex bg-gray-800 rounded-md max-w-xs pb-3 justify-between items-center max-h-48 sm:max-h-64 overflow-hidden">
                <h2 className="bg-gray-600 p-1 rounded-md text-white font-bold truncate">
                  {i + 1}) {link.url}
                </h2>
                <p className="text-gray-400 font-bold text-sm p-1">
                  {(link.createdAt = new Date().toLocaleDateString())}
                </p>
                <button
                  onClick={async () => await deleteLink(link.id)}
                  className="bg-red-700 hover:bg-red-600 p-2 rounded-md text-white font-bold"
                >
                  X
                </button>
              </div>

              <p className="text-white text-center rounded-md bg-gray-600 p-2">{`http://localhost:3000/u/${link.shortUrl}`}</p>
            </div>
          ))}
      </div>
      {url.length == 0 && (
        <div className="justify-center">
          <h1 className="text-white font-bold text-xl text-center tracking-wide">
            No URLs Found
          </h1>
        </div>
      )}
    </div>
  );
};
