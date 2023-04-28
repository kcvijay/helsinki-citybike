import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <p className="footer-header">Helsinki City Bike Journey Application</p>
      <p className="footer-details">
        Source Code &copy; &mdash; Vijay KC&nbsp;{year}
      </p>
    </footer>
  );
};

export default Footer;
