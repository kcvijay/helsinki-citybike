import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import TablePagination from "@mui/material/TablePagination";
import Pagination from "@mui/material/Pagination";
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
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [totalRows, setTotalRows] = useState(2000000);

  useEffect(() => {
    handleFetchData();
  }, [rowsPerPage, page]);

  const handleFetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:4000/api/journeys?limit=${rowsPerPage}&skip=${page}`
      );
      setData(response.data);
      setLoading(false);
      console.log(rowsPerPage, page);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleChangeRowsPerPage = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  // On input change.
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  //Items filtered based on
  //a. Duration more than 10 seconds
  //b. Distance more than 10 meters
  //c. Station name in search input
  //d. Station id in search input
  const filteredData = data.filter(
    (obj) =>
      obj.duration > 10 &&
      obj.covered_distance > 10 &&
      (obj.departure_station_name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
        obj.departure_station_id === search)
  );

  if (loading) {
    return (
      <div className="flex py-[50px] justify-center items-center">
        <img className="rounded-full" src={loader} alt="Loading icon" />
      </div>
    );
  }

  return (
    <div className="wrapper">
      <ToastContainer autoClose={3000} />
      <div className="flex flex-col md:flex-row md:justify-between md:items-bottom gap-4 mb-8">
        <h2 className="text-3xl text-white font-bold">All Journeys</h2>
      </div>
      <table className="bg-white border border-white mx-auto w-full transition-all duration-300">
        <caption className="relative text-left bg-white text-slate-500 border border-white">
          <form>
            <input
              className="w-full h-full p-3 pr-12 focus:outline-4 focus:outline-slate-500"
              type="text"
              id="search"
              name="search"
              placeholder="Search by departure station or id.."
              spellCheck="false"
              autoComplete="off"
              onChange={handleSearch}
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
            <th>Duration(min, sec)</th>
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
                duration={obj.duration}
              />
            );
          })}
        </tbody>
      </table>
      <div className="bg-white text-black w-full">
        {/* <TablePagination
          rowsPerPageOptions={[50, 100, 150, 200]}
          component="div"
          count={totalRows}
          page={page}
          onPageChange={handlePageChange}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
        <Pagination
          count={totalRows / rowsPerPage}
          page={page}
          onChange={() => handleChange}
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
