import React from "react";

const About = () => {
  return (
    <div className="wrapper">
      <h2 className="text-3xl text-white font-bold mb-8">About This Project</h2>
      <p className="text-white leading-10 text-xl mb-4">
        This is an application which showcases the travel data of CityBike in
        Helsinki and Espoo area, between May to July 2021.
      </p>
      <p className="text-white leading-10 text-xl mb-4">
        It follows the guidelines of Finland-based IT consulting company{" "}
        <strong>Solita</strong>, from whom this project was asked as a
        pre-assignment for a trainee program.
      </p>
      <p className="text-white leading-10 text-xl mb-4">
        In this application, user can view and sort all the journey-details of
        CityBike riders in the given period of time as well as, the list of all
        CityBike stations in Helsinki and Espoo area.
      </p>
      <p className="text-white text-2xl mb-4">Happy browsing_🙏_</p>
    </div>
  );
};

export default About;
