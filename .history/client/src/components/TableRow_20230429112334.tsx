import React from "react";

interface tableRowProps {
  dep_station: String;
  dep_station_id: String;
  dep_time: Date;
  return_station: String;
  return_station_id: String;
  return_time: Date;
  distance: Number;
  duration: Number;
}

const TableRow = ({
  dep_station,
  dep_station_id,
  dep_time,
  return_station,
  return_station_id,
  return_time,
  distance,
  duration,
}) => {
  return (
    <tr>
      <td data-cell="Departure Station">{dep_station}</td>
      <td data-cell="Departure Station ID">{dep_station_id}</td>
      <td data-cell="Departure Time">{dep_time}</td>
      <td data-cell="Return Station">{return_station}</td>
      <td data-cell="Return Station ID">{return_station_id}</td>
      <td data-cell="Return Time">{return_time}</td>
      <td data-cell="Distance">{distance}</td>
      <td data-cell="Duration">{duration}</td>
    </tr>
  );
};

export default TableRow;
