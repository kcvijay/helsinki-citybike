import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import loader from "../assets/loading.gif";

const SingleJourney = () => {

    interface stationData {
        _id: string;
        station_id: string;
        serial: number;
        name: string;
        address: string;
        city: string;
        operator: string;
        capacity: number;
        x: string;
        y: string;
      }
    
  interface departureStation {
    Adress: string;
    _id: string;
    Nimi: string;
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

  interface returnStation {
    Adress: string;
    _id: string;
    Nimi: string;
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
  const navigate = useNavigate();
  const [departureStationData, setDepartureStationData] = useState<
    departureStation[]
  >([]);
  const [returnStationData, setReturnStationData] = useState<returnStation[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, window.screenTop);
    handleFetchData();
  }, []);

  const handleDepartureStationData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:4000/api/stations/${params.stationid}`
      );
      setDepartureStationData(res.data);
    } catch (error: any) {
      alert(error.message);
    }
    setLoading(false);
  };

  const handleReturnStationData = () => {
    setLoading(true);
    try {
        const res = await axios.get(`http://localhost:4000/api/stations/${return_station_id}`)
    }
  };

  if (loading) {
    return (
      <div className="flex py-[50px] justify-center items-center">
        <img src={loader} alt="Loading icon" />
      </div>
    );
  }

  return (
    <>
      {data && (
        <div className="wrapper">
          <h2 className="text-xl md:text-3xl text-white font-bold uppercase">
            {data?.dep_}
            <span className="inline-block bg-orange-500 ml-4 px-4 py-1 rounded-md">
              id {data?.station_id}
            </span>
          </h2>
          <p className="text-md text-white my-2 mb-12">
            {data?.Nimi} / {data?.Namn}
          </p>

          <div className="bg-white p-5 rounded-md shadow-sm shadow-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-300">
            <div>
              <div className="mb-6">
                <h3 className="text-md">Address</h3>
                <p className="text-md text-slate-500">
                  {data?.address} / {data?.Adress}
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-md">City</h3>
                <p className="text-md text-slate-500">
                  {data?.city === " " ? "Helsinki" : data?.city} /{" "}
                  {data?.Stad === " " ? "Helsingfors" : data?.Stad}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-md">Operator</h3>
                <p className="text-md text-slate-500">
                  {data?.operator === " " ? "CityBike Finland" : data?.operator}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-md">Capacity</h3>
                <p className="text-md text-slate-500">{data?.capacity} bikes</p>
              </div>

              <div className="mb-6">
                <h3 className="text-md">Coordinates</h3>
                <p className="text-md text-slate-500">
                  X: {data?.x}, Y: {data?.y}
                </p>
                <p className="text-md text-slate-500"></p>
              </div>
            </div>
            <div className="h-[300px] md:h-auto relative transition-all duration-300">
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
          <button
            className="inline-block btn-primary mt-6"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        </div>
      )}
    </>
  );
};

export default SingleStation;
