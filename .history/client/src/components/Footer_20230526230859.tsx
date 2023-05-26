import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-slate-700 text-center py-8 text-white">
      <h2 className="text-xl font-bold">Helsinki City Bike Application</h2>
      <p>Source Code &copy;&nbsp;:&nbsp;Vijay KC {year}</p>
      <p>Images: Unsplash</p>
    </footer>
  );
};

export default Footer;
