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
        <div className="text-white">
          From{" "}
          <h2 className="text-xl md:text-3xl text-white font-bold uppercase mb-4">
            Samplekatu 2
            <span className="inline-block bg-orange-500 ml-4 px-4 py-1 rounded-md">
              ID 201
            </span>
          </h2>
          To
          <h2 className="text-xl md:text-3xl text-white font-bold uppercase">
            Samplekatu 20
            <span className="inline-block bg-orange-500 ml-4 px-4 py-1 rounded-md">
              ID 208
            </span>
          </h2>
          <div className="text-xl text-white">
            <div>
              <span className="material-icons align-middle inline-block w-[30px]">
                timer
              </span>
              6 min
            </div>
          </div>
        </div>

        <div className="max-w-full">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m25!1m12!1m3!1d15871.278022755385!2d24.900224073065917!3d60.182226002452715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m10!3e1!4m3!3m2!1d60.190923399999996!2d24.912893!4m4!2s60.173956898526%2C%2024.932898315344!3m2!1d60.1739569!2d24.932898299999998!5e0!3m2!1sfi!2sfi!4v1683212374722!5m2!1sfi!2sfi"
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
