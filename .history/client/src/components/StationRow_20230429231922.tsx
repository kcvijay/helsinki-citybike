import React from "react";

interface stationRowProp {
  name: string;
  address: string;
  city: string;
  capacity: number;
  operator: string;
  x: string;
  y: string;
}

const StationRow = ({
  name,
  address,
  city,
  capacity,
  operator,
  x,
  y,
}: stationRowProp) => {
  return (
    <tr>
      <td data-cell="Name">{name}</td>
      <td data-cell="Address">{address}</td>
      <td data-cell="City">{city}</td>
      <td data-cell="Capacity">{capacity}</td>
      <td data-cell="Operator">{Operator}</td>
      <td data-cell="Duration (min)">{duration}</td>
    </tr>
  );
};

export default StationRow;
