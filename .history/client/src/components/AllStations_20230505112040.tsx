import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import loader from "../assets/loading.gif";
import StationRow from "./StationRow";
import "../styles/Table.css";
import "react-toastify/dist/ReactToastify.css";

const AllStations = () => {
  interface stationData {
    _id: string;
    station_id: string;
    serial: number;
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
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(25);
  const [firstIndex, setFirstIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(25);

  const navigate = useNavigate();

  // Page on load-- fetch all items
  useEffect(() => {
    handleFetchData(1000, 0);
  }, []);

  useEffect(() => {
    if (itemsPerPage < 0) {
      handleFetchData(itemsPerPage, 0).then(() => {
        notify(data.length);
      });
    }
  }, [itemsPerPage, data.length]);

  // Providing two parameters for HTML change event,
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target instanceof HTMLInputElement) {
      setSearch(e.target.value);
    } else if (e.target instanceof HTMLSelectElement) {
      setItemsPerPage(+e.target.value);
    }
  };

  // const handleFetchData = async (items: number, offset: number) => {
  const handleFetchData = async (page: number, perPage: number) => {
    setLoading(true);
    // const limit = items === undefined ? "" : items;
    // const skip = offset === undefined ? "" : offset;

    const res = await axios.get(
      `http://localhost:4000/api/stations?page=${page}&perPage=${perPage}`
    );
    setData(res.data);
    setLoading(false);
  };

  const notify = (items: number) => toast(`Showing ${items} items.`);

  const filteredData = data.filter((obj) => {
    return (
      obj.name.toLowerCase().includes(search.toLowerCase()) ||
      obj.station_id === search
    );
  });

  // For Pagination //
  const endIndex = firstIndex + itemsPerPage;
  const currentItems = filteredData.slice(firstIndex, endIndex);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (e: any) => {
    const newOffset = e.selected + 1 * itemsPerPage;
    const maxOffset = data.length - itemsPerPage;
    const clampedOffset = Math.min(newOffset, maxOffset);
    setFirstIndex(clampedOffset);
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
        <h2 className="text-3xl text-white font-bold">All Stations</h2>
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
              placeholder="Search by station name or id.."
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
            <th>Station Name (id)</th>
            <th>Address</th>
            <th>City</th>
            <th className="text-center">Capacity</th>
            <th>Operator</th>
            <th className="text-center">X</th>
            <th className="text-center">Y</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((obj) => {
            return (
              <StationRow
                _id={obj._id}
                key={obj._id}
                station_id={obj.station_id}
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

export default AllStations;
