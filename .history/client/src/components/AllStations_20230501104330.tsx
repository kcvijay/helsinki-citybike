import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Table.css";
import loader from "../assets/loading.gif";
import StationRow from "./StationRow";

const AllStations = () => {
  interface stationData {
    _id: string;
    name: string;
    address: string;
    city: string;
    operator: string;
    capacity: number;
    x: string;
    y: string;
  }
  const [data, setData] = useState<stationData[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:4000/api/stations?limit=500").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const filteredData = data.filter((obj) =>
    obj.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex py-[50px] justify-center items-center">
        <img src={loader} alt="Loading icon" />
      </div>
    );
  }
  return (
    <div className="wrapper">
      <h2 className="text-3xl text-white font-bold mb-8">All Stations</h2>
      <table className="bg-white border border-white mx-auto w-full transition-all duration-300">
        <caption className="relative text-left bg-white text-slate-500 border border-white">
          <form>
            <input
              className="w-full h-full p-3 pr-12 focus:outline-4 focus:outline-slate-500"
              type="text"
              pattern="[a-z][0-9]"
              id="search"
              name="search"
              placeholder="Search by station name.."
              spellCheck={"false"}
              onChange={changeHandler}
            ></input>
            <button
              type="submit"
              className="material-icons absolute top-3 right-6 scale-125"
            >
              search
            </button>
          </form>
        </caption>
        <thead className=" border-collapse bg-orange-600 text-white">
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th className="text-center">Capacity</th>
            <th>Operator</th>
            <th>X</th>
            <th className="text-center">Y</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((obj: stationData) => {
            return (
              <StationRow
                key={obj._id}
                _id={obj._id}
                name={obj.name}
                address={obj.address}
                city={obj.city || "Helsinki"}
                capacity={obj.capacity}
                operator={obj.operator}
                x={obj.x}
                y={obj.y}
              />
            );
          })}
        </tbody>
      </table>
      <button
        className="inline-block btn-primary mt-6"
        onClick={() => navigate(-1)}
      >
        &larr; Go Back
      </button>
    </div>
  );
};

export default AllStations;
