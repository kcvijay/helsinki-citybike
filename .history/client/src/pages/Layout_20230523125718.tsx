import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Layout = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      setShowScrollButton(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(window.scrollY);

  return (
    <div>
      <Header />
      <Main />
      <Footer />

      <div
        className={`fixed bottom-8 right-8 bg-orange-500 w-[48px] h-[48px] rounded-full cursor-pointer ${
          !showScrollButton
            ? "opacity-0 transition-all duration-700"
            : "opacity-1 transition-all duration-700"
        }`}
        onClick={handleScrollToTop}
      >
        <span className="material-icons text-white text-[48px]">
          arrow_circle_up
        </span>
      </div>
    </div>
  );
};

export default Layout;
