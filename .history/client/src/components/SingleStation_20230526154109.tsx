import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../app/store";
import { useAppDispatch } from "../app/hooks";
import {
  showSingleStation,
  showTopStations,
} from "../features/stations/stationsAction";
import { Link, useParams, useNavigate } from "react-router-dom";
import loader from "../assets/loading.gif";

import TopRankList from "./TopRankList";

const SingleStation = () => {
  interface singleStationData {
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
    total_departure_journeys: number;
    total_return_journeys: number;
  }

  interface TopStations {
    count: number;
    station_id: string;
    station_name: string;
    station_address: string;
  }

  const params = useParams();
  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useNavigate();
  const { stationData, loading } = useSelector(
    (state: RootState) => state.stations
  );
  const [data, setData] = useState<singleStationData>();
  // const [returnStationData, setReturnStationData] = useState<TopStations[]>([]);
  // const [departureStationData, setDepartureStationData] = useState<
  //   TopStations[]
  // >([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(showSingleStation(params.id ?? ""));
  }, []);

  const handleFetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:4000/api/stations/${params.stationid}`
      );
      setData(res.data);
    } catch (error: any) {
      alert(error.message);
    }
    setLoading(false);
  };

  const handleTopStations = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:4000/api/stations/${params.stationid}/top-stations`
      );
      setReturnStationData(res.data.topReturnStations);
      setDepartureStationData(res.data.topDepartureStations);
    } catch (error: any) {
      alert(error.message);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="flex py-[50px] justify-center items-center">
        <img className="rounded-full" src={loader} alt="Loading icon" />
      </div>
    );
  }

  console.log(returnStationData);

  return (
    <>
      <div className="wrapper">
        <h2 className="text-xl md:text-3xl text-white font-bold uppercase">
          {data?.name}
          <span className="inline-block bg-orange-500 ml-4 px-4 py-1 rounded-md">
            id {data?.station_id}
          </span>
        </h2>
        <p className="text-md text-white my-2 mb-12">
          {data?.Nimi} / {data?.Namn}
        </p>

        <div className="bg-white p-5 rounded-md shadow-sm shadow-slate-100 grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-300">
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
              <p className="text-md text-slate-500">
                {data?.capacity} bicycles
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-md">Total Departure Journeys</h3>
              <p className="text-md text-slate-500">
                {data?.total_departure_journeys.toLocaleString("fi-FI")}
              </p>
              <p className="text-md text-slate-500"></p>
            </div>
            <div className="mb-6">
              <h3 className="text-md">Total Return Journeys</h3>
              <p className="text-md text-slate-500">
                {data?.total_return_journeys.toLocaleString("fi-FI")}
              </p>
              <p className="text-md text-slate-500"></p>
            </div>
          </div>
          <div className="h-[350px] md:h-full md:auto relative">
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
          <div>
            <h3 className="text-lg font-bold mb-3 px-4">
              Top 5 Destination Stations
            </h3>
            <ul className="rounded-lg shadow-md overflow-hidden">
              {returnStationData &&
                returnStationData.map((data, index) => {
                  return (
                    <TopRankList
                      index={index + 1}
                      count={data.count}
                      station_id={data.station_id}
                      station_name={data.station_name}
                    />
                  );
                })}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 px-4">
              Top 5 Departure Stations{" "}
            </h3>
            <ul className="rounded-lg shadow-md overflow-hidden">
              {departureStationData &&
                departureStationData.map((data, index) => {
                  return (
                    <TopRankList
                      index={index + 1}
                      count={data.count}
                      station_id={data.station_id}
                      station_name={data.station_name}
                    />
                  );
                })}
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <button
            className="btn-primary mb-6 w-full md:w-auto"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleStation;
