import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import loader from "../assets/loading.gif";
import JourneyRow from "./JourneyRow";
import "../styles/Table.css";

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
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState({
    search: "",
    itemsPerPage: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/api/journeys?limit=`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  const itemsPerPageLoadingHandler = async (items: string) => {
    setLoading(true);
    await axios
      .get(`http://localhost:4000/api/journeys?limit=${items}`)
      .then((res) => {
        console.log(items);
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        alert("An Error occurred. " + error.message);
      });
  };

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target instanceof HTMLInputElement) {
      setInputValue({ ...inputValue, search: e.target.value });
    } else if (e.target instanceof HTMLSelectElement) {
      setInputValue({ ...inputValue, itemsPerPage: e.target.value });
      itemsPerPageLoadingHandler(inputValue.itemsPerPage);
    }
  };

  //Items filtered based on "duration more than 10 seconds, distance more than 10 meters and search value."
  const filteredData = data.filter(
    (obj) =>
      obj.duration > 10 &&
      obj.covered_distance > 10 &&
      obj.departure_station_name
        .toLowerCase()
        .includes(inputValue.search.toLowerCase())
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
      <div className="flex justify-between">
        <h2 className="text-3xl text-white font-bold mb-8">All Journeys</h2>
        <form>
          <select
            defaultValue={"default"}
            className="p-3 rounded-md"
            id="itemsPerPage"
            name="itemsPerPage"
            onChange={changeHandler}
          >
            <option value="default" disabled>
              Items per page
            </option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="100">100</option>
          </select>
        </form>
      </div>

      <table className="bg-white border border-white mx-auto w-full transition-all duration-300">
        <caption className="relative text-left bg-white text-slate-500 border border-white">
          <form>
            <input
              className="w-full h-full p-3 pr-12 focus:outline-4 focus:outline-slate-500"
              type="text"
              pattern="[a-z][0-9]"
              id="search"
              name="search"
              placeholder="Search by departure station.."
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
              <JourneyRow
                key={obj._id}
                _id={obj._id}
                dep_station={obj.departure_station_name}
                dep_station_id={obj.departure_station_id}
                dep_time={obj.departure}
                return_station={obj.return_station_name}
                return_station_id={obj.return_station_id}
                return_time={obj.return}
                distance={Math.round((obj.covered_distance / 1000) * 100) / 100}
                duration={Math.floor(obj.duration / 60)}
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

export default AllJourneys;
