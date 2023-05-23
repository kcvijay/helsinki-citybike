import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <div className="fixed bottom-8 right-8">
        <span className="material-icons text-white text-3xl">
          arrow_circle_up
        </span>
      </div>
    </div>
  );
};

export default Layout;
