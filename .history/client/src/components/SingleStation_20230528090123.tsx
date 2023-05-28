import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../app/store";
import { useAppDispatch } from "../app/hooks";
import {
  showSingleStation,
  showTopStations,
} from "../features/stations/stationsAction";
import { Link, useParams, useNavigate } from "react-router-dom";

import { convertToMinAndSec } from "../modules/ConvertMinAndSec";

// Components
import loader from "../assets/loading.gif";
import TopRankList from "./TopRankList";
import StationDetailList from "./StationDetailList";

const SingleStation = () => {
  const params = useParams();
  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useNavigate();
  const { stationData, topStations, loading } = useSelector(
    (state: RootState) => state.stations
  );

  // Fetch single station data
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(showSingleStation(params.stationid ?? ""));
  }, []);

  // Fetch separate top 5 stations data
  useEffect(() => {
    dispatch(showTopStations(params.stationid ?? ""));
  }, []);

  if (loading) {
    return (
      <div className="flex py-[50px] justify-center items-center">
        <img className="rounded-full" src={loader} alt="Loading icon" />
      </div>
    );
  }

  return (
    <>
      <div className="wrapper">
        <h2 className="page-header uppercase">
          {stationData?.name}
          <span className="inline-block bg-orange-500 ml-4 px-2 py-1">
            {stationData?.station_id}
          </span>
        </h2>
        <p className="text-lg text-white my-2 mb-12">
          {stationData?.Nimi} / {stationData?.Namn}
        </p>

        <div className="bg-white p-8 grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-300">
          <div className="h-full flex flex-col gap-2">
            <StationDetailList
              listHeader={"Address"}
              listDetail={stationData ? stationData?.address : ""}
            />

            <StationDetailList
              listHeader={"City"}
              listDetail={
                stationData && stationData.city !== " "
                  ? stationData?.city
                  : "Helsinki"
              }
            />

            <StationDetailList
              listHeader={"Capacity"}
              listDetail={
                stationData ? stationData?.capacity + " Bicycles" : ""
              }
            />

            <StationDetailList
              listHeader={"Departure"}
              listDetail={`${
                stationData
                  ? stationData?.total_departure_journeys.toLocaleString(
                      "fi-FI"
                    ) + " Times"
                  : ""
              }, Average ${
                stationData
                  ? convertToMinAndSec(stationData?.average_departure_duration)
                  : ""
              }`}
            />

            <StationDetailList
              listHeader={"Return"}
              listDetail={`${
                stationData
                  ? stationData?.total_return_journeys.toLocaleString("fi-FI") +
                    " Times"
                  : ""
              }, Average ${
                stationData
                  ? convertToMinAndSec(stationData?.average_return_duration)
                  : ""
              }`}
            />
          </div>
          <div className="h-[350px] md:h-full md:auto relative">
            <iframe
              className="w-full h-full border-4 border-slate-200"
              title={stationData?.name}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${stationData?.x}%2C${stationData?.y}%2C${stationData?.x}%2C${stationData?.y}&amp;layer=mapnik&amp;marker=${stationData?.y}%2C${stationData?.x}`}
            ></iframe>
            <Link
              className="block absolute bottom-4 left-4 bg-white py-2 px-4 border-2 border-slate-300"
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
            <ul className="shadow-md overflow-hidden">
              {topStations &&
                topStations?.topReturnStations.map((data, index) => {
                  return (
                    <TopRankList
                      key={data.station_id}
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
            <ul className="shadow-md overflow-hidden">
              {topStations &&
                topStations?.topDepartureStations.map((data, index) => {
                  return (
                    <TopRankList
                      key={data.station_id}
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
