import React, { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Layout = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, window.screenTop);
  };

  const [showScrollButton, setShowScrollButton] = useState(false);
  const scrollThreshold = 200;

  setShowScrollButton(scrollY > scrollThreshold);

  return (
    <div>
      <Header />
      <Main />
      <Footer />
      {showScrollButton && (
        <div
          className="fixed bottom-8 right-8 bg-black w-[48px] h-[48px] rounded-full cursor-pointer"
          onClick={handleScrollToTop}
        >
          <span className="material-icons text-white text-[48px]">
            arrow_circle_up
          </span>
        </div>
      )}
    </div>
  );
};

export default Layout;
