import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import loader from "../assets/loading.gif";

const SingleJourney = () => {
  interface journeyData {
    _id: string;
    departure_station_name: string;
    departure_station_id: string;
    departure: Date;
    return_station_name: string;
    return_station_id: string;
    return: Date;
    covered_distance: number;
    duration: number;
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
  const [journeyData, setJourneyData] = useState<journeyData>();
  const [departureStationData, setDepartureStationData] =
    useState<departureStation>();
  const [returnStationData, setReturnStationData] = useState<returnStation>();
  const [loading, setLoading] = useState(false);
  console.log(params.journeyid);

  useEffect(() => {
    handleJourneyData();
  }, []);

  useEffect(() => {
    if (journeyData) {
      handleDepartureStationData();
      handleReturnStationData();
    }
  }, []);

  const handleJourneyData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:4000/api/journeys/${params.journeyid}`
      );
      setJourneyData(res.data);
      setLoading(false);
    } catch (error) {
      alert("Something went wrong. ");
    }
  };

  const handleDepartureStationData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:4000/api/stations/${journeyData?.departure_station_id}`
      );
      setDepartureStationData(res.data);
    } catch (error: any) {
      alert(error.message);
    }
    setLoading(false);
  };

  const handleReturnStationData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:4000/api/stations/${journeyData?.return_station_id}`
      );
      setReturnStationData(res.data);
    } catch (error: any) {
      alert("Something went wrong. " + error.message);
    }
  };

  // Formatting to readable Finnish type date format!
  const convertToLocaleString = (oldDateFormat: any) => {
    const formattedDate = new Date(oldDateFormat).toLocaleString("fi-FI");
    return formattedDate;
  };

  if (loading) {
    return (
      <div className="flex py-[50px] justify-center items-center">
        <img src={loader} alt="Loading icon" />
      </div>
    );
  }

  console.log("journey data" + journeyData);
  console.log("departureStation" + departureStationData);
  console.log("return station" + returnStationData);

  return (
    <>
      <div className="wrapper">
        <div className="text-white">
          From{" "}
          <h2 className="text-xl md:text-3xl text-white font-bold uppercase mb-6">
            {journeyData?.departure_station_name}
            <span className="inline-block bg-orange-500 ml-4 px-4 py-1 rounded-md">
              ID {journeyData?.departure_station_id}
            </span>
            <span className="block w-max text-xl text-white rounded-md font-normal">
              {convertToLocaleString(journeyData?.departure)}
            </span>
          </h2>
          To
          <h2 className="text-xl md:text-3xl text-white font-bold uppercase">
            {journeyData?.return_station_name}
            <span className="inline-block bg-orange-500 ml-4 px-4 py-1 rounded-md">
              ID {journeyData?.return_station_id}
            </span>
            <span className="block w-max text-xl text-white rounded-md font-normal">
              {convertToLocaleString(journeyData?.return)}
            </span>
          </h2>
          <div className="text-xl text-white"></div>
        </div>

        <div className="mt-12">
          <iframe
            className="w-full h-[350px]"
            title="map"
            src={`https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7930.444132094687!2d24.862119030184367!3d60.20371979912591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e1!4m4!2s${departureStationData?.y}%2C${departureStationData?.x}!3m2!1d60.197870599999995!2d24.876301299999998!4m4!2s60.209690428765%2C%2024.8686567195812!3m2!1d${returnStationData?.y}!2d${returnStationData?.x}!5e0!3m2!1sfi!2sfi!4v1683216115271!5m2!1sfi!2sfi`}
          ></iframe>
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
