import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleStation = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);
  return (
    <div className="wrapper">
      <h2 className="text-3xl text-white font-bold mb-8">Something</h2>
    </div>
  );
};

export default SingleStation;
