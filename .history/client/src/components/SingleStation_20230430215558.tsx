import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleStation = () => {
  interface singleStationData {
    Adress: string;
    _id: string;
    Namn: string;
    Stad: string;
    address: string;
    capacity: number;
    city: string;
    name: string;
    operator: string;
    station_id: string;
    x: string;
    y: string;
  }
  const params = useParams();
  const [data, setData] = useState<singleStationData>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:4000/api/stations/${params.id}`).then((res) => {
      console.log(res.data);
      setData(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="wrapper">
      <h2 className="text-3xl text-white font-bold uppercase">{data?.name}</h2>
      <p className="text-2xl text-white my-2">{data?.Namn}</p>

      <div className="bg-white p-4">
        <h3 className="text-2xl">Address:</h3>
        <p className="text-xl text-slate-500">{data?.address}</p>
        <p className="text-xl text-slate-500">{data?.Adress}</p>
      </div>
    </div>
  );
};

export default SingleStation;
