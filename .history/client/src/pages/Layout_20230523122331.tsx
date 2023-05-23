import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Layout = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, window.screenTop);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      const [showScrollButton, setShowScrollButton] = useState(false);
      setShowScrollButton(window.scrollY > scrollThreshold);
    };

    // window.addEventListener("scroll", handleScrollToTop);
    // return () => {
    //   window.removeEventListener("scroll", handleScrollToTop);
    // };
  }, []);

  console.log(window.scrollY);

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
