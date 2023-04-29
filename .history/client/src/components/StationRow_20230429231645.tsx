import React from "react";

interface stationRowProp {
  name: String;
  address: String;
  city: String;
  capacity: Number;
  Operator: String;
  x: String;
  y: String;
}

const StationRow = ({ name }) => {
  return (
    <tr>
      <td data-cell="Name">{name}</td>
      <td data-cell="Depart. Time">{convertToLocaleString(dep_time)}</td>
      <td data-cell="Return Station (id)">
        {return_station} ({return_station_id})
      </td>
      <td data-cell="Return Time">{convertToLocaleString(return_time)}</td>
      <td data-cell="Distance (km)">{Number(distance)}</td>
      <td data-cell="Duration (min)">{duration}</td>
    </tr>
  );
};

export default StationRow;
