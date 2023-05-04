import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import loader from "../assets/loading.gif";

const SingleJourney = () => {

    
    
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
  const [journeyData, setJourneyData] = useState([])
  const [departureStationData, setDepartureStationData] = useState<
    departureStation[]
  >([]);
  const [returnStationData, setReturnStationData] = useState<returnStation[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, window.screenTop);
    handleJourneyData();
  }, []);

  const handleJourneyData = async () => {
    setLoading(true);
    try {
        const res = await axios.get(`http://localhost:4000/api/journeys/${params.id}`);
        setJourneyData(res.data)
    } catch(error: string) {
        alert("Something went wrong. "+ error.message)
    }
  }

  const handleDepartureStationData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:4000/api/stations/${}`
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
        const res = await axios.get(`http://localhost:4000/api/stations/${journeyData.return_station_id}`);
        setReturnStationData(res.data)
    } catch(error: string) {
        alert("Something went wrong. "+ error.message)
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
  
        <div className="wrapper">
          <h2 className="text-xl md:text-3xl text-white font-bold uppercase">
     
            <span className="inline-block bg-orange-500 ml-4 px-4 py-1 rounded-md">
            </span>
          </h2>
          <p className="text-md text-white my-2 mb-12">
          </p>

          <div className="bg-white p-5 rounded-md shadow-sm shadow-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-300">
            <div>
              <div className="mb-6">
                <h3 className="text-md">Address</h3>
                <p className="text-md text-slate-500">
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-md">City</h3>
                <p className="text-md text-slate-500">
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-md">Operator</h3>
                <p className="text-md text-slate-500">
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-md">Capacity</h3>
                <p className="text-md text-slate-500"> bikes</p>
              </div>

              <div className="mb-6">
                <h3 className="text-md">Coordinates</h3>
                <p className="text-md text-slate-500">
                </p>
                <p className="text-md text-slate-500"></p>
              </div>
            </div>
            <div className="h-[300px] md:h-auto relative transition-all duration-300">
            </div>
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
