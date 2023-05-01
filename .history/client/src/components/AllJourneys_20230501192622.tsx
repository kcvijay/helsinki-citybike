import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import axios from "axios";
import loader from "../assets/loading.gif";
import JourneyRow from "./JourneyRow";
import "../styles/Table.css";
import "react-toastify/dist/ReactToastify.css";

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
  const [search, setSearch] = useState("");
  const [chosenPageLimit, setChosenPageLimit] = useState(Number(""));
  const navigate = useNavigate();

  // On Page load...
  useEffect(() => {
    handleFetchData(100, 0);
  }, []);

  //On change event
  useEffect(() => {
    if (chosenPageLimit > 0) {
      handleFetchData(chosenPageLimit, 0);
      toastify(data.length);
    }
  }, [chosenPageLimit]);

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target instanceof HTMLInputElement) {
      setSearch(e.target.value);
    } else if (e.target instanceof HTMLSelectElement) {
      setChosenPageLimit(+e.target.value);
    }
  };

  // Toast for showed data items.
  const toastify = (items: number) => toast(`Showing ${items} items.`);

  // Function for fetching data.
  const handleFetchData = (perPage?: number, offset?: number) => {
    setLoading(true);
    axios
      .get(
        `http://localhost:4000/api/journeys?limit=${
          perPage === undefined ? "" : perPage
        }&skip=${offset === undefined ? "" : offset}`
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        alert("An error ocurred. " + error.message);
      });
  };

  //Items filtered based on "duration more than 10 seconds, distance more than 10 meters and search value."
  const filteredData = data.filter(
    (obj) =>
      obj.duration > 10 &&
      obj.covered_distance > 10 &&
      obj.departure_station_name.toLowerCase().includes(search.toLowerCase())
  );

  // const pageCount = Math.ceil(filteredData.length / initialPerPage);
  // const handlePaginationClick = (e: any) => {
  //   const newOffset = (e.selected * initialPerPage) % +filteredData.length;
  //   console.log(
  //     `User requested page number ${e.selected}, which is offset ${newOffset}`
  //   );

  //   setItemOffset(newOffset);
  // };

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
        <h2 className="text-3xl text-white font-bold">All Journeys</h2>
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
            <option value="25">25 items</option>
            <option value="50">50 items</option>
            <option value="75">75 items</option>
            <option value="100">100 items</option>
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
      {/* <div className="bg-white p-1 my-4">
        <ReactPaginate
          className="flex justify-evenly items-center"
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePaginationClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div> */}

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
