import React, { useEffect, useState } from "react";

//Package & libraries
import { useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "../app/store";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../app/hooks";
import TablePagination from "@mui/material/TablePagination";
import { showAllJourneys } from "../features/journeys/journeysAction";

//Components
import loader from "../assets/loading.gif";
import JourneyRow from "./JourneyRow";

//Styles
import "../styles/Table.css";
import "../styles/AllJourneys.css";
import "react-toastify/dist/ReactToastify.css";

const AllJourneys = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const { allJourneyData, loading } = useSelector(
    (state: RootState) => state.journeys
  );
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const totalRows: number = 2151673;

  useEffect(() => {
    dispatch(showAllJourneys({ limit: rowsPerPage, skip: page }));
    window.scrollTo(0, 0);
  }, [dispatch, rowsPerPage, page]);

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
  const filteredData = allJourneyData.filter(
    (obj: any) =>
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
      <div className="flex flex-col md:flex-row md:justify-between md:items-bottom gap-4 mb-8">
        <h2 className="page-header">All Journeys</h2>
      </div>
      <table>
        <caption className="relative bg-white text-left border border-white">
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
              className="material-icons absolute top-4 right-5 scale-150"
            >
              search
            </button>
          </form>
        </caption>
        <thead>
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
          {filteredData.map((obj: any) => {
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
