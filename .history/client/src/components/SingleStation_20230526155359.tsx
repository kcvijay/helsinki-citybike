import React, { useEffect } from "react";
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
  const params = useParams();
  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useNavigate();
  const { stationData, topStations, loading } = useSelector(
    (state: RootState) => state.stations
  );
  // const [returnStationData, setReturnStationData] = useState<TopStations[]>([]);
  // const [departureStationData, setDepartureStationData] = useState<
  //   TopStations[]
  // >([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(showSingleStation(params.stationid ?? ""));
  }, []);

  useEffect(() => {
    dispatch(showTopStations(params.stationid ?? ""));
  }, []);

  // const handleFetchData = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await axios.get(
  //       `http://localhost:4000/api/stations/${params.stationid}`
  //     );
  //     setData(res.data);
  //   } catch (error: any) {
  //     alert(error.message);
  //   }
  //   setLoading(false);
  // };

  // const handleTopStations = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await axios.get(
  //       `http://localhost:4000/api/stations/${params.stationid}/top-stations`
  //     );
  //     setReturnStationData(res.data.topReturnStations);
  //     setDepartureStationData(res.data.topDepartureStations);
  //   } catch (error: any) {
  //     alert(error.message);
  //   }
  //   setLoading(false);
  // };

  if (loading) {
    return (
      <div className="flex py-[50px] justify-center items-center">
        <img className="rounded-full" src={loader} alt="Loading icon" />
      </div>
    );
  }

  console.log(topStations);

  return (
    <>
      <div className="wrapper">
        <h2 className="text-xl md:text-3xl text-white font-bold uppercase">
          {stationData?.name}
          <span className="inline-block bg-orange-500 ml-4 px-4 py-1 rounded-md">
            id {stationData?.station_id}
          </span>
        </h2>
        <p className="text-md text-white my-2 mb-12">
          {stationData?.Nimi} / {stationData?.Namn}
        </p>

        <div className="bg-white p-5 rounded-md shadow-sm shadow-slate-100 grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-300">
          <div>
            <div className="mb-6">
              <h3 className="text-md">Address</h3>
              <p className="text-md text-slate-500">
                {stationData?.address} / {stationData?.Adress}
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-md">City</h3>
              <p className="text-md text-slate-500">
                {stationData?.city === " " ? "Helsinki" : stationData?.city} /{" "}
                {stationData?.Stad === " " ? "Helsingfors" : stationData?.Stad}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-md">Operator</h3>
              <p className="text-md text-slate-500">
                {stationData?.operator === " "
                  ? "CityBike Finland"
                  : stationData?.operator}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-md">Capacity</h3>
              <p className="text-md text-slate-500">
                {stationData?.capacity} bicycles
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-md">Total Departure Journeys</h3>
              <p className="text-md text-slate-500">
                {stationData?.total_departure_journeys.toLocaleString("fi-FI")}
              </p>
              <p className="text-md text-slate-500"></p>
            </div>
            <div className="mb-6">
              <h3 className="text-md">Total Return Journeys</h3>
              <p className="text-md text-slate-500">
                {stationData?.total_return_journeys.toLocaleString("fi-FI")}
              </p>
              <p className="text-md text-slate-500"></p>
            </div>
          </div>
          <div className="h-[350px] md:h-full md:auto relative">
            <iframe
              className="w-full h-full rounded-md border-4 border-slate-200"
              title={stationData?.name}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${stationData?.x}%2C${stationData?.y}%2C${stationData?.x}%2C${stationData?.y}&amp;layer=mapnik&amp;marker=${stationData?.y}%2C${stationData?.x}`}
            ></iframe>
            <Link
              className="block absolute bottom-4 left-4 bg-white py-2 px-4 border-2 border-slate-300 rounded-md "
              to={`https://www.openstreetmap.org/?mlat=${stationData?.y}&amp;mlon=${stationData?.x}#map=18/${stationData?.y}/${stationData?.x}`}
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
              {topStations &&
                topStations[0]?.topReturnStations.map((data, index) => {
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
              {/* {departureStationData &&
                departureStationData.map((data, index) => {
                  return (
                    <TopRankList
                      index={index + 1}
                      count={data.count}
                      station_id={data.station_id}
                      station_name={data.station_name}
                    />
                  );
                })} */}
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
