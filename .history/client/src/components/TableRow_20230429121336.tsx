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
  const formattedDepTime = dep_time;
  const depDate = new Date(dep_time);
  const formattedDepTime = 
  });

  const 
  return (
    <tr>
      <td data-cell="Departure Station">{dep_station}</td>
      <td data-cell="Departure Station ID">{dep_station_id}</td>
      <td data-cell="Departure Time">{formattedDepTime}</td>
      <td data-cell="Return Station">{return_station}</td>
      <td data-cell="Return Station ID">{return_station_id}</td>
      <td data-cell="Return Time">{return_time.toLocaleString()}</td>
      <td data-cell="Distance">{Number(distance)}</td>
      <td data-cell="Duration">{duration}</td>
    </tr>
  );
};

export default TableRow;
