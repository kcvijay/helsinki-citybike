import React from "react";

const About = () => {
  return (
    <div className="wrapper bg-white p-12">
      <h2 className="text-3xl font-bold mb-8">About This Project</h2>
      <p className="leading-10 mb-4">
        The purpose of this application is to show and visualize both consumer
        riding journeys and, the information about CityBike Helsinki bicycle
        stations in Helsinki and Espoo area. At this moment, there are over 2
        millions of journey data are available between May 2021 and July 2021.
      </p>

      <p className="leading-10 mb-4">
        As an introductory feature, application user can also add a station data
        into the pool of database.
      </p>
      <p className="leading-10 mb-4">
        In this application, you can view and sort all the journey and
        bicycle-station details on the given period of time.
      </p>

      <p className="leading-10 mb-4">
        Few additional features are also on the way.
      </p>
      <p className="text-xl mb-4">Happy browsing.</p>
    </div>
  );
};

export default About;
