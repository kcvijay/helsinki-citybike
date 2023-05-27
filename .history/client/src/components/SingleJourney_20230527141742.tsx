import React, { useEffect, useState } from "react";
import axios from "axios";
import { RootState, AppDispatch } from "../app/store";
import { useAppDispatch } from "../app/hooks";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { showSingleJourney } from "../features/journeys/journeysAction";
import loader from "../assets/loading.gif";

const SingleJourney = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();

  const { journeyData, loading } = useSelector(
    (state: RootState) => state.journeys
  );
  const { stationData } = useSelector((state: RootState) => state.stations);
  const [departureStationData, setDepartureStationData] =
    useState<typeof stationData>();
  const [returnStationData, setReturnStationData] =
    useState<typeof stationData>();

  useEffect(() => {
    dispatch(showSingleJourney(params.id ?? ""));
    window.scrollTo(0, 0);
  }, [params.id]);

  useEffect(() => {
    const fetchDepartureStationData = async () => {
      const response = await axios.get(
        `http://localhost:4000/api/stations/${journeyData?.departure_station_id}`
      );
      setDepartureStationData(response.data);
    };
    if (journeyData) {
      fetchDepartureStationData();
    }
  }, [journeyData]);

  useEffect(() => {
    const fetchReturnStationData = async () => {
      const response = await axios.get(
        `http://localhost:4000/api/stations/${journeyData?.return_station_id}`
      );
      setReturnStationData(response.data);
    };
    if (departureStationData) {
      fetchReturnStationData();
    }
  }, [departureStationData]);

  // Formatting to readable Finnish type date format!
  const convertToLocaleString = (oldDateFormat: any) => {
    const formattedDate = new Date(oldDateFormat).toLocaleString("fi-FI");
    return formattedDate;
  };

  const convertToMinAndSec = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const minAndSec = `${minutes} min, ${seconds} sec`;
    return minAndSec;
  };

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
        <div className="text-white flex flex-col md:flex-row">
          <div className="w-full">
            <p className="text-lg">From</p>
            <h2 className="page-header capitalize">
              {journeyData?.departure_station_name} [
              {journeyData?.departure_station_id}]
              <span className="block w-max text-xl text-white rounded-md font-normal">
                {convertToLocaleString(journeyData?.departure)}
              </span>
            </h2>
          </div>
          <div className="w-full">
            <p className="text-lg">To</p>
            <h2 className="text-xl md:text-3xl text-white font-bold uppercase mb-8">
              {journeyData?.return_station_name} [
              {journeyData?.return_station_id}]
              <span className="block w-max text-xl text-white rounded-md font-normal">
                {convertToLocaleString(journeyData?.return)}
              </span>
            </h2>
          </div>
        </div>
        <div className="flex justify-start items-center gap-4">
          <p className="flex justify-center items-center bg-white px-4 py-2 rounded-md">
            <p className="material-icons text-slate-500 mr-4">
              directions_bike
            </p>
            <p>
              {journeyData?.covered_distance &&
                (journeyData.covered_distance / 1000).toFixed(2)}{" "}
              km
            </p>
          </p>
          <p className="flex justify-center items-center bg-white px-4 py-2 rounded-md">
            <p className="material-icons text-slate-500 mr-4">schedule</p>
            <p>
              {journeyData?.duration &&
                convertToMinAndSec(journeyData?.duration)}
            </p>
          </p>
        </div>
        <div className="mt-8">
          {departureStationData && returnStationData ? (
            <iframe
              className="w-full min-h-[400px] border-4 border-slate-500 rounded-md"
              title="map"
              src={`https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7930.444132094687!2d24.862119030184367!3d60.20371979912591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e1!4m4!2s${departureStationData?.y}%2C${departureStationData?.x}!3m2!1d${departureStationData?.y}!2d${departureStationData?.x}!4m4!2s${returnStationData?.y}%2C%20${returnStationData?.x}!3m2!1d${returnStationData?.y}!2d${returnStationData?.x}!5e0!3m2!1sfi!2sfi!4v1683216115271!5m2!1sfi!2sfi`}
              loading={"lazy"}
              referrerPolicy={"no-referrer-when-downgrade"}
            />
          ) : (
            <div className="w-full flex justify-center items-center min-h-[400px] border-4 bg-white border-slate-500 rounded-md">
              <img className="rounded-full" src={loader} alt="Loading icon" />
            </div>
          )}
        </div>
        <button
          className="inline-block btn-primary mt-6"
          onClick={() => navigate(-1)}
        >
          &larr; Go Back
        </button>
      </div>
    </>
  );
};

export default SingleJourney;
