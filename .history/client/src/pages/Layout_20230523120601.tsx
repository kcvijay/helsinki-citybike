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
      <div className="fixed bottom-8 right-8 bg-black w-[48px] h-[48px]">
        <span className="material-icons text-white text-[48px]">
          arrow_circle_up
        </span>
      </div>
    </div>
  );
};

export default Layout;
