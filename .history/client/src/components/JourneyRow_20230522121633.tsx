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

  // Calculating minutes and seconds.
  const convertToMinAndSec = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const minAndSec = `${minutes} min, ${seconds} sec`;
    return minAndSec;
  };

  return (
    <tr>
      <td data-cell="Depart. Station (id)">
        <Link to={`/all-journeys/${_id}`}>
          {dep_station} ({dep_station_id})
        </Link>
      </td>
      <td data-cell="Depart. Time">{convertToLocaleString(dep_time)}</td>
      <td data-cell="Return Station (id)">
        {return_station} ({return_station_id})
      </td>
      <td data-cell="Return Time">{convertToLocaleString(return_time)}</td>
      <td data-cell="Distance (km)" className="text-center">
        {distance}
      </td>
      <td data-cell="Duration" className="text-center">
        {Math.ceil(duration)}
      </td>
    </tr>
  );
};

export default JourneyRow;
