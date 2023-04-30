import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface singleStationData {
  Adress: string;
  _id: string;
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

const SingleStation = () => {
  const params = useParams();
  const [data, setData] = useState<singleStationData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/api/stations/${params.stationid}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="wrapper">
      <h2 className="text-3xl text-white font-bold mb-8 uppercase">5</h2>
      <div></div>
    </div>
  );
};

export default SingleStation;
