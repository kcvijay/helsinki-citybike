import React, { useEffect, useState } from "react";

//Package & libraries
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import TablePagination from "@mui/material/TablePagination";
import axios from "axios";

//Components
import loader from "../assets/loading.gif";
import JourneyRow from "./JourneyRow";

//Styles
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

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [totalRows, setTotalRows] = useState(2151673);

  useEffect(() => {
    const handleFetchData = async () => {
      setLoading(true);
      try {
        const skip = (page + 1 - 1) * rowsPerPage;
        const response = await axios.get(
          `http://localhost:4000/api/journeys?limit=${rowsPerPage}&offset=${skip}`
        );
        setData(response.data);
        setLoading(false);
      } catch (error: any) {
        toast.error("Something went wrong. " + error.message);
      }
      window.scrollTo(0, window.screenTop);
    };
    handleFetchData();
  }, [rowsPerPage, page]);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(e.target.value));
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
        <h2 className="page-header">All Journeys</h2>
      </div>
      <table className="bg-white border border-white mx-auto w-full transition-all duration-300">
        <caption className="relative text-left bg-white text-slate-500 border border-white">
          <form>
            <input
              className="mt-0"
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
              className="material-icons  absolute top-5 right-6 scale-125"
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
            <th className="text-center">Distance</th>
            <th className="text-center">Duration</th>
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
        <TablePagination
          rowsPerPageOptions={[50, 100, 150, 200]}
          component="div"
          count={totalRows}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
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
