import React from "react";

const About = () => {
  return (
    <div className="wrapper">
      <h2 className="text-3xl text-white font-bold mb-8">About This Project</h2>
      <p className="text-white leading-10 text-xl">
        This is basically an application which showcases the travel data of
        CityBike in Helsinki and Espoo area, between May to July 2021.<br></br>
        This application follows the guidelines of Finland-based IT consulting
        company named Solita, from whom this project was asked as a
        pre-assignment for a trainee program.
      </p>
      <p className="text-white leading-10 text-xl">
        User can view all the journeys CityBike users rode on given period of
        time as well as, the list of all CityBike stations in Helsinki and Espoo
        area.
      </p>
      <p className="text-white text-2xl my-8">Happy browsing ! &mdash; Vijay</p>
    </div>
  );
};

export default About;
