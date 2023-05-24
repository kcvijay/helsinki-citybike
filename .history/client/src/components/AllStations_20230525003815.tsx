import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import TablePagination from "@mui/material/TablePagination";
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
    capacity: number;
  }
  const [data, setData] = useState<stationData[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [totalRows, setTotalRows] = useState(457);

  const navigate = useNavigate();

  // Page on load-- fetch all items
  useEffect(() => {
    const handleFetchData = async () => {
      setLoading(true);
      try {
        const skip = (page + 1 - 1) * rowsPerPage;
        const response = await axios.get(
          `http://localhost:4000/api/stations?limit=${rowsPerPage}&offset=${skip}`
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }

      window.scrollTo(0, 0);
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

  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | undefined>
  ) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter((obj) => {
    return (
      obj.name.toLowerCase().includes(search.toLowerCase()) ||
      obj.station_id === search
    );
  });

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
              onChange={inputChangeHandler}
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
            <th className="text-center">City</th>
            <th className="text-center">Capacity</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((obj) => {
            return (
              <StationRow
                _id={obj._id}
                key={obj._id}
                station_id={obj.station_id}
                name={obj.name}
                address={obj.address}
                city={obj.city}
                capacity={obj.capacity}
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
      <div>
        <button
          className="inline-block btn-primary mt-6"
          onClick={() => navigate(-1)}
        >
          &larr; Go Back
        </button>
        <Link
          className="btn-secondary w-full md:w-auto hover:no-underline"
          to="/all-stations/add-a-station"
        >
          <span className="material-icons align-text-bottom">add</span> Add a
          Station
        </Link>
      </div>
    </div>
  );
};

export default AllStations;
