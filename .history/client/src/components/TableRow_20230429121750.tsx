import React from "react";

interface tableRowProps {
  dep_station: string;
  dep_station_id: string;
  dep_time: Date;
  return_station: string;
  return_station_id: string;
  return_time: Date;
  distance: number;
  duration: number;
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
}: tableRowProps) => {
  const convertToLocaleString = (oldDateFormat: any) => {
    const formattedDate = new Date(oldDateFormat).toLocaleString("fi-FI");
    return formattedDate;
  };

  return (
    <tr>
      <td data-cell="Departure Station">{dep_station}</td>
      <td data-cell="Departure Station ID">{dep_station_id}</td>
      <td data-cell="Departure Time">{convertToLocaleString(dep_time)}</td>
      <td data-cell="Return Station">{return_station}</td>
      <td data-cell="Return Station ID">{return_station_id}</td>
      <td data-cell="Return Time">{convertToLocaleString(return_time)}</td>
      <td data-cell="Distance">{Number(distance)}</td>
      <td data-cell="Duration">{duration}</td>
    </tr>
  );
};

export default TableRow;
