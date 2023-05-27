import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="wrapper text-center text-white">
      <h2 className="inline-block text-[32px] font-bold bg-white text-black px-8 py-4 mb-8 rounded-md">
        Error 404!
      </h2>
      <p className="text-xl leading-10">
        The page you're trying to search is not found. <br /> Please check the
        web address and try again. <br />
        Or,
      </p>

      <Link className="btn-primary" to="/">
        &larr; Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
