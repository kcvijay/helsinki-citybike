import React from "react";

const About = () => {
  return (
    <div className="wrapper bg-white">
      <h2 className="text-3xl text-black font-bold mb-8">About This Project</h2>
      <p className="text-black leading-10 text-xl mb-4">
        This is an application which shows the travel data of CityBike in
        Helsinki and Espoo area, between May to July 2021, following the
        guidelines of IT consulting company Solita.
      </p>
      <p className="text-black leading-10 text-xl mb-4">
        In this application, user can view and sort all the journey and
        bicycle-station details of CityBike riders in the given period of time.
      </p>
      <p className="text-black text-xl mb-4">Happy browsing 😊</p>
    </div>
  );
};

export default About;