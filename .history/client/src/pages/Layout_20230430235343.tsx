import React, { useEffect } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

useEffect(() => {
  const scrollPosition = window.screenTop;
  window.scrollTo(0, scrollPosition);
}, []);

const Layout = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
