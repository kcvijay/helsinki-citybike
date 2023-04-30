import React from "react";
import { Link } from "react-router-dom";

interface tableRowProps {
  _id: string;
  dep_station: string;
  dep_station_id: string;
  dep_time: Date;
  return_station: string;
  return_station_id: string;
  return_time: Date;
  distance: number;
  duration: number;
}

const JourneyRow = ({
  _id,
  dep_station,
  dep_station_id,
  dep_time,
  return_station,
  return_station_id,
  return_time,
  distance,
  duration,
}: tableRowProps) => {
  // Formatting to readable Finnish type date format!
  const convertToLocaleString = (oldDateFormat: any) => {
    const formattedDate = new Date(oldDateFormat).toLocaleString("fi-FI");
    return formattedDate;
  };

  return (
    <tr>
      <td data-cell="Depart. Station (id)">
        {dep_station} ({dep_station_id})
      </td>
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

export default JourneyRow;
