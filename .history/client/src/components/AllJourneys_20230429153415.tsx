import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/AllJourney.css";
import TableRow from "./TableRow";

const AllJourneys = () => {
  interface journeyData {
    id: number;
    departure_station_name: string;
    departure_station_id: string;
    departure: Date;
    return_station_name: string;
    return_station_id: string;
    return: Date;
    covered_distance: number;
    duration: number;
  }
  const [data, setData] = useState<journeyData[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/journeys?limit=10")
      .then((res) => setData(res.data));
  }, []);

  // Items filtered based on "duration more than 10 seconds and distance more than 10 meters."
  const filteredData = data.filter(
    (obj) => obj.duration > 10 && obj.covered_distance > 10
  );
  return (
    <div className="wrapper">
      <h2 className="text-3xl text-white font-bold mb-8">All Journeys</h2>
      <div className="bg-white rounded-md overflow-hidden">
        <table className="mx-auto w-full transition-all duration-300">
          <thead className="border border-collapse bg-slate-500 text-white rounded-md">
            <tr>
              <th>Depart. Station (ID)</th>
              <th>Depart. Time</th>
              <th>Return Station (ID)</th>
              <th>Return Time</th>
              <th>Distance(km)</th>
              <th>Duration(m)</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((el) => {
              return (
                <TableRow
                  key={el.id}
                  dep_station={el.departure_station_name}
                  dep_station_id={el.departure_station_id}
                  dep_time={el.departure}
                  return_station={el.return_station_name}
                  return_station_id={el.return_station_id}
                  return_time={el.return}
                  distance={
                    Math.round((el.covered_distance / 1000) * 100) / 100
                  }
                  duration={Math.floor(el.duration / 60)}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJourneys;
