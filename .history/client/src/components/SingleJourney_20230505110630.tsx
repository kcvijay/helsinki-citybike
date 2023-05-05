import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  // eslint-disable-next-line @typescript-eslint/no-redeclare
  const [journeyData, setJourneyData] = useState<journeyData>();
  const [departureStationData, setDepartureStationData] =
    useState<departureStation>();
  const [returnStationData, setReturnStationData] = useState<returnStation>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, window.screenTop);
    const handleJourneyData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:4000/api/journeys/${params.id}`
        );
        setJourneyData(res.data);
        setLoading(false);
      } catch (error) {
        alert("Something went wrong. ");
      }
    };
    handleJourneyData();
  }, []);

  useEffect(() => {
    if (journeyData) {
      const handleReturnStationData = async () => {
        setLoading(true);
        try {
          const res = await axios.get(
            `http://localhost:4000/api/stations/${journeyData?.return_station_id}`
          );
          setReturnStationData(res.data);
          setLoading(false);
        } catch (error: any) {
          alert("Something went wrong. " + error.message);
        }
      };
      handleReturnStationData();
    }
  }, [journeyData]);

  useEffect(() => {
    if (returnStationData) {
      const handleDepartureStationData = async () => {
        setLoading(true);
        try {
          const res = await axios.get(
            `http://localhost:4000/api/stations/${journeyData?.departure_station_id}`
          );
          setDepartureStationData(res.data);
          setLoading(false);
        } catch (error: any) {
          alert(error.message);
        }
      };
      handleDepartureStationData();
    }
  }, [journeyData?.departure_station_id, returnStationData]);

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

  console.log(journeyData);
  console.log(departureStationData);
  console.log(returnStationData);

  return (
    <>
      <div className="wrapper">
        <div className="text-white md:flex">
          <div className="w-full">
            <p className="text-lg">From</p>
            <h2 className="text-xl md:text-3xl text-white font-bold uppercase mb-8">
              {journeyData?.departure_station_name}

              <span className="block w-max text-xl text-white rounded-md font-normal">
                {convertToLocaleString(journeyData?.departure)}
              </span>
            </h2>
          </div>
          <div className="w-full">
            <p className="text-lg">To</p>
            <h2 className="text-xl md:text-3xl text-white font-bold uppercase mb-8">
              {journeyData?.return_station_name}

              <span className="block w-max text-xl text-white rounded-md font-normal">
                {convertToLocaleString(journeyData?.return)}
              </span>
            </h2>
          </div>
        </div>
        <div className="text-xl flex items-center gap-4">
          <p className="inline-block bg-white px-4 py-2 text-black rounded-md">
            {journeyData?.covered_distance &&
              (journeyData.covered_distance / 1000).toFixed(2)}{" "}
            km
          </p>
          <p className="inline-block bg-white px-4 py-2 text-black rounded-md">
            {journeyData?.duration && (journeyData.duration / 60).toFixed(0)}{" "}
            min
          </p>
        </div>
        <div className="mt-12">
          <iframe
            className="w-full min-h-[400px]"
            title="map"
            src={`https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7930.444132094687!2d24.862119030184367!3d60.20371979912591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e1!4m4!2s${departureStationData?.y}%2C${departureStationData?.x}!3m2!1d${departureStationData?.y}!2d${departureStationData?.x}!4m4!2s${returnStationData?.y}%2C%20${returnStationData?.x}!3m2!1d${returnStationData?.y}!2d${returnStationData?.x}!5e0!3m2!1sfi!2sfi!4v1683216115271!5m2!1sfi!2sfi`}
            loading={"lazy"}
            referrerPolicy={"no-referrer-when-downgrade"}
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
