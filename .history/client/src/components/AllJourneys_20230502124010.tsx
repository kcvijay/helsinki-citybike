import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import axios from "axios";
import loader from "../assets/loading.gif";
import JourneyRow from "./JourneyRow";
import "../styles/Table.css";
import "../styles/AllJourneys.css";
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
  const [firstIndex, setFirstIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const navigate = useNavigate();

  // On Page load...Intial fetch//
  useEffect(() => {
    handleFetchData(1000, 0);
  }, []);
  ////

  // RE-fetch the data on 'items per page' change.//
  useEffect(() => {
    if (itemsPerPage < 0) {
      handleFetchData(itemsPerPage, 0);
      toastify(data.length);
    }
  }, [itemsPerPage, data.length]);
  ////

  const toastify = (noOfItems: number) =>
    toast.success(`Showing ${noOfItems} items.`);

  // On input change.//
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target instanceof HTMLInputElement) {
      setSearch(e.target.value);
    } else if (e.target instanceof HTMLSelectElement) {
      setItemsPerPage(+e.target.value);
    }
  };
  ////

  // Function for fetching data.//
  const handleFetchData = async (fetchedItems?: number, offset?: number) => {
    setLoading(true);
    const limit = fetchedItems === undefined ? "" : fetchedItems;
    const skip = offset === undefined ? "" : offset;
    await axios
      .get(`http://localhost:4000/api/journeys?limit=${limit}&skip=${skip}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  };
  ////

  //Items filtered based on "duration more than 10 seconds, distance more than 10 meters and search value."//
  const filteredData = data.filter(
    (obj) =>
      obj.duration > 10 &&
      obj.covered_distance > 10 &&
      obj.departure_station_name.toLowerCase().includes(search.toLowerCase()) &&
      obj.(departure_station_id).includes(search.toLowerCase())
  );
  ////

  // For Pagination //
  const endIndex = firstIndex + itemsPerPage;
  const currentItems = filteredData.slice(firstIndex, endIndex);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (e: any) => {
    const newOffset = e.selected + 1 * itemsPerPage;
    const maxOffset = data.length - itemsPerPage;
    const clampedOffset = Math.min(newOffset, maxOffset);
    setFirstIndex(clampedOffset);
    console.log(e);
  };
  ////

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
              id="search"
              name="search"
              placeholder="Search by departure station.."
              spellCheck="false"
              autoComplete="off"
              onChange={changeHandler}
            ></input>
            <button
              disabled
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
          {currentItems.map((obj, i) => {
            return (
              <JourneyRow
                key={obj._id}
                _id={obj._id}
                serial={i + 1}
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
      <div className="bg-white text-black w-full">
        <ReactPaginate
          activeClassName={"item activePage "}
          breakClassName={"item break-me "}
          breakLabel={"..."}
          containerClassName={"pagination"}
          disabledClassName={"disabled-page"}
          nextClassName={"item next "}
          pageClassName={"item pagination-page "}
          nextLabel="next >"
          previousClassName={"item previous"}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>

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
