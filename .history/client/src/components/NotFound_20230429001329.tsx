import React from "react";

const NotFound = () => {
  return (
    <div className="wrapper text-center text-white">
      <h2 className="inline-block text-[32px] font-bold bg-white text-black px-8 py-4 mb-8 rounded-md">
        Error 404!
      </h2>
      <p>
        The page you're trying to search is not found in the system. Please
        check the web address and try again.
      </p>
    </div>
  );
};

export default NotFound;
