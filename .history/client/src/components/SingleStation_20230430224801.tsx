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
    const scrollPosition = window.pageYOffset;
    window.scrollTo(0, scrollPosition);
  }, []);

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
        {data?.name}
        <span className="inline-block bg-orange-500 ml-4 px-4 py-1 rounded-md">
          ID {data?.station_id}
        </span>
      </h2>
      <p className="text-2xl text-white my-2 mb-12">{data?.Namn}</p>

      <div className="bg-white p-6 rounded-md shadow-sm shadow-slate-100 grid grid-cols-2 gap-4">
        <div>
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

          <div className="mb-6">
            <h3 className="text-2xl">Operator</h3>
            <p className="text-xl text-slate-500">{data?.operator}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl">Capacity</h3>
            <p className="text-xl text-slate-500">{data?.capacity} bikes</p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl">Location</h3>
            <p className="text-xl text-slate-500">X: {data?.x}</p>
            <p className="text-xl text-slate-500">Y: {data?.y}</p>
          </div>
        </div>
        <div>
          <iframe
            title="map"
            src={`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1984.324680860958!2d${data?.x}!3d${data?.y}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNjDCsDEwJzMxLjMiTiAyNMKwNDgnMDcuNCJF!5e0!3m2!1sen!2sfi!4v1682883817120!5m2!1sen!2sfi`}
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>

        <p className="text-lg text-slate-500"></p>
      </div>
    </div>
  );
};

export default SingleStation;
