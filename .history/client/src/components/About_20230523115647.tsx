import React from "react";

const About = () => {
  return (
    <div className="wrapper bg-white">
      <h2 className="text-3xl font-bold mb-8">About This Project</h2>
      <p className="leading-10 text-xl mb-4">
        This is an application which shows the travel data of CityBike in
        Helsinki and Espoo area, between May to July 2021. The application is
        created following the guidelines of IT consulting company Solita.
      </p>
      <p className="leading-10 text-xl mb-4">
        In this application, user can view and sort all the journey and
        bicycle-station details on the given period of time.
      </p>

      <p className="leading-10 text-xl mb-4">
        Few additional features are also on the way.
      </p>
      <p className="text-xl mb-4">Happy browsing.</p>
    </div>
  );
};

export default About;
