import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import loader from "../assets/loading.gif";

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

  if (data === null) {
    window.location.replace("/page-not-found");
  }

  if (loading) {
    if (loading) {
      return (
        <div className="flex py-[50px] justify-center items-center">
          <img src={loader} alt="Loading icon" />
        </div>
      );
    }
  }

  return (
    <div className="wrapper">
      <h2 className="text-3xl text-white font-bold uppercase">
        {data?.name}
        <span className="inline-block bg-orange-500 ml-4 px-4 py-1 rounded-md">
          id {data?.station_id}
        </span>
      </h2>
      <p className="text-xl text-white my-2 mb-12">{data?.Namn}</p>

      <div className="bg-white p-4 rounded-md shadow-sm shadow-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4 transition-all dura">
        <div>
          <div className="mb-6">
            <h3 className="text-xl">Address</h3>
            <p className="text-lg text-slate-500">
              {data?.address} / {data?.Adress}
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl">City</h3>
            <p className="text-lg text-slate-500">
              {data?.city} / {data?.Stad}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl">Operator</h3>
            <p className="text-lg text-slate-500">{data?.operator}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl">Capacity</h3>
            <p className="text-lg text-slate-500">{data?.capacity} bikes</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl">Location</h3>
            <p className="text-lg text-slate-500">
              X: {data?.x} Y: {data?.y}
            </p>
            <p className="text-lg text-slate-500"></p>
          </div>
        </div>
        <div className="h-[300px] md:h-auto relative">
          <iframe
            className="w-full h-full rounded-md border-4 border-slate-200"
            title={data?.name}
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${data?.x}%2C${data?.y}%2C${data?.x}%2C${data?.y}&amp;layer=mapnik&amp;marker=${data?.y}%2C${data?.x}`}
          ></iframe>
          <Link
            className="block absolute bottom-4 left-4 bg-white py-2 px-4 border-2 border-slate-300 rounded-md "
            to={`https://www.openstreetmap.org/?mlat=${data?.y}&amp;mlon=${data?.x}#map=18/${data?.y}/${data?.x}`}
            target="_blank noreferer"
          >
            View at Website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleStation;
