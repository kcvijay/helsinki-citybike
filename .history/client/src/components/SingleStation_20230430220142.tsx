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
      <h2 className="text-3xl text-white font-bold uppercase">
        {data?.name}{" "}
        <span className="bg-white px-4 py-1 rounded-full text-slate-500 text-xl align-middle">
          {data?.station_id}
        </span>
      </h2>
      <p className="text-2xl text-white my-2">{data?.Namn}</p>

      <div className="bg-white p-4">
        <div className="mb-6">
          <h3 className="text-2xl">Address</h3>
          <p className="text-xl text-slate-500">
            {data?.address} / {data?.Adress}
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl">City</h3>
          <p className="text-xl text-slate-500">
            {data?.city} / {data?.Stad}
          </p>
        </div>

        <p className="text-lg text-slate-500"></p>
      </div>
    </div>
  );
};

export default SingleStation;
