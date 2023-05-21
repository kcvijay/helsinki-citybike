import React from "react";
import { Link } from "react-router-dom";

interface stationRowProps {
  _id: string;
  station_id: string;
  name: string;
  address: string;
  city: string;
  capacity: number;
}

const StationRow = ({
  _id,
  station_id,
  name,
  address,
  city,
  capacity,
}: stationRowProps) => {
  return (
    <tr>
      <td data-cell="Name">
        <Link to={`/all-stations/${station_id}`}>
          {name} ({station_id})
        </Link>
      </td>
      <td data-cell="Address">{address}</td>
      <td data-cell="City">{city === " " ? "Helsinki" : city}</td>
      <td className="text-center" data-cell="Capacity">
        {capacity}
      </td>
    </tr>
  );
};

export default StationRow;
