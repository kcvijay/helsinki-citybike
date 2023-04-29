import React from "react";

interface stationRowProp {
  name: String;
  address: String;
  city: String;
  capacity: Number;
  operator: String;
  x: String;
  y: String;
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
