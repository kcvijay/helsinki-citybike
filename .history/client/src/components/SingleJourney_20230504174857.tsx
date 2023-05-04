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
  const [journeyData, setJourneyData] = useState<journeyData[]>([]);
  const [departureStationData, setDepartureStationData] = useState<
    departureStation[]
  >([]);
  const [returnStationData, setReturnStationData] = useState<returnStation[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  console.log(params.journeyid);

  useEffect(() => {
    window.scrollTo(0, window.screenTop);
    handleJourneyData();
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

  //   const handleDepartureStationData = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await axios.get(
  //         `http://localhost:4000/api/stations/${journeyData[0].departure_station_id}`
  //       );
  //       setDepartureStationData(res.data);
  //     } catch (error: any) {
  //       alert(error.message);
  //     }
  //     setLoading(false);
  //   };

  //   const handleReturnStationData = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await axios.get(
  //         `http://localhost:4000/api/stations/${journeyData[0].return_station_id}`
  //       );
  //       setReturnStationData(res.data);
  //     } catch (error: any) {
  //       alert("Something went wrong. " + error.message);
  //     }
  //   };

  if (loading) {
    return (
      <div className="flex py-[50px] justify-center items-center">
        <img src={loader} alt="Loading icon" />
      </div>
    );
  }

  console.log(journeyData);

  return (
    <>
      <div className="wrapper">
        <h2 className="text-xl md:text-3xl text-white font-bold uppercase">
          <span className="inline-block bg-orange-500 ml-4 px-4 py-1 rounded-md"></span>
        </h2>
        Application will be here.
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
