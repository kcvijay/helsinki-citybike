import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/AllJourney.css";
import TableRow from "./TableRow";

const AllJourneys = () => {
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
  const [data, setData] = useState<journeyData[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/journeys?limit=100")
      .then((res) => setData(res.data));
  }, []);

  // Items filtered based on "duration more than 10 seconds and distance more than 10 meters."
  const filteredData = data.filter(
    (obj) => obj.duration > 10 && obj.covered_distance > 10
  );
  return (
    <div className="wrapper">
      <h2 className="text-3xl text-white font-bold mb-8">All Journeys</h2>
      <div className="bg-white overflow-hidden">
        <table className="mx-auto w-full transition-all duration-300">
          <caption className="text-left p-3 bg-orange-300">
            Helsinki City Bike Customer Journey Data 31.5.2021 -
          </caption>
          <thead className="border border-collapse bg-orange-600 text-white">
            <tr>
              <th>Depart. Station (id)</th>
              <th>Depart. Time</th>
              <th>Return Station (id)</th>
              <th>Return Time</th>
              <th>Distance(km)</th>
              <th>Duration(min)</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((obj) => {
              return (
                <TableRow
                  key={obj._id}
                  dep_station={obj.departure_station_name}
                  dep_station_id={obj.departure_station_id}
                  dep_time={obj.departure}
                  return_station={obj.return_station_name}
                  return_station_id={obj.return_station_id}
                  return_time={obj.return}
                  distance={
                    Math.round((obj.covered_distance / 1000) * 100) / 100
                  }
                  duration={Math.floor(obj.duration / 60)}
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
