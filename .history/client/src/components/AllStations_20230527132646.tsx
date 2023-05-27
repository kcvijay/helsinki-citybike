import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { showAllStations } from "../features/stations/stationsAction";
import { RootState, AppDispatch } from "../app/store";
import { useAppDispatch } from "../app/hooks";
import TablePagination from "@mui/material/TablePagination";

// Components & styles

import loader from "../assets/loading.gif";
import StationRow from "./StationRow";
import "../styles/Table.css";
import "react-toastify/dist/ReactToastify.css";

const AllStations = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();

  const { allStationData, loading } = useSelector(
    (state: RootState) => state.stations
  );

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const totalRows: number = 457;

  // Page on load-- fetch all items
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(showAllStations({ limit: rowsPerPage, skip: page }));
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

  const filteredData = allStationData.filter((obj) => {
    return (
      obj.name.toLowerCase().includes(search.toLowerCase()) ||
      obj.station_id === search
    );
  });

  if (loading) {
    return (
      <div className="flex py-[50px] justify-center items-center">
        <img className="rounded-full" src={loader} alt="Loading icon" />
      </div>
    );
  }
  return (
    <div className="wrapper">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <h2 className="text-3xl text-white font-bold">All Stations</h2>
      </div>
      <table className="bg-white border border-white mx-auto w-full transition-all duration-300">
        <caption className="relative text-left bg-white text-slate-500 border border-white">
          <form>
            <input
              className="mt-0"
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
              disabled
              className="material-icons absolute top-5 right-5 scale-125"
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

      <button
        className="btn-primary w-full md:w-auto  mb-6 md:mb-0 "
        onClick={() => navigate(-1)}
      >
        &larr; Go Back
      </button>
    </div>
  );
};

export default AllStations;
