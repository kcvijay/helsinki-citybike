import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="whole-wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
