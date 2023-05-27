import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-slate-700 text-center py-8 text-white">
      <h2 className="text-xl font-bold">
        CityBike Helsinki Journeys & Stations
      </h2>
      <p>Source Code &copy;&nbsp;:&nbsp;Vijay KC {year}</p>
      <p className="text-sm">Images from Unsplash</p>
      <p className="text-sm">Data licensed by Helsinki CityBike</p>
    </footer>
  );
};

export default Footer;
