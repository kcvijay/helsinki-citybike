import React from "react";
import { Link } from "react-router-dom";

interface stationRowProps {
  FID: string;
  serial: number;
  name: string;
  address: string;
  city: string;
  capacity: number;
  operator: string;
  x: string;
  y: string;
}

const StationRow = ({
  FID,
  serial,
  name,
  address,
  city,
  capacity,
  operator,
  x,
  y,
}: stationRowProps) => {
  return (
    <tr>
      <td data-cell="Serial">{serial}</td>
      <td data-cell="Name">
        <Link to={`${FID}`}>{name}</Link>
      </td>
      <td data-cell="Address">{address}</td>
      <td data-cell="City">{city === " " ? "Helsinki" : city}</td>
      <td className="text-center" data-cell="Capacity">
        {capacity}
      </td>
      <td data-cell="Operator">
        {operator === " " ? "CityBike Finland" : operator}
      </td>
      <td data-cell="X">{x}</td>
      <td className="text-center" data-cell="Y">
        {y}
      </td>
    </tr>
  );
};

export default StationRow;
