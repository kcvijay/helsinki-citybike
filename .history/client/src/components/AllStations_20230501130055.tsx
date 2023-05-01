import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import loader from "../assets/loading.gif";
import StationRow from "./StationRow";
import "../styles/Table.css";
import "react-toastify/dist/ReactToastify.css";

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
  const [inputValue, setInputValue] = useState({
    search: "",
    itemsPerPage: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:4000/api/stations?limit=").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  // Providing two parameters for HTML change event,
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target instanceof HTMLInputElement) {
      setInputValue((prevState) => ({ ...prevState, search: e.target.value }));
    } else if (e.target instanceof HTMLSelectElement) {
      setInputValue((prevState) => ({
        ...prevState,
        itemsPerPage: e.target.value,
      }));
      itemsPerPageHandler(e.target.value);
    }
  };

  const itemsPerPageHandler = (items: string) => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/api/stations?limit=${items}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
        notify(res.data.length);
      })
      .catch((error) => {
        alert("An Error occurred. " + error.message);
      });
  };

  const notify = (items: string) => toast(`Showing ${items} items.`);

  const filteredData = data.filter((obj) =>
    obj.name.toLowerCase().includes(inputValue.search.toLowerCase())
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
      <ToastContainer autoClose={3000} />
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <h2 className="text-3xl text-white font-bold mb-8">All Stations</h2>
        <form>
          <select
            defaultValue={"default"}
            className="px-4 py-2 rounded-md"
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
          {filteredData.map((obj) => {
            return (
              <StationRow
                key={obj._id}
                _id={obj._id}
                name={obj.name}
                address={obj.address}
                city={obj.city}
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
