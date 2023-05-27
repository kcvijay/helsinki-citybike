import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    // <div className="wrapper bg-slate-100 p-12">
    //   <h2 className="text-3xl font-bold mb-8">About This Project</h2>
    //   <p className="leading-10 mb-4">
    //     The purpose of this application is to show and visualize both consumer
    //     riding journeys and, the information about CityBike Helsinki bicycle
    //     stations in Helsinki and Espoo area. At this moment, there are over 2
    //     millions of journey data are available between May 2021 and July 2021
    //     along with 457 bicycle stations.
    //   </p>

    //   <p className="leading-10 mb-4">
    //     As an introductory feature, application user can also{" "}
    //     <strong>
    //       <Link to="/all-stations/add-a-station">add a station</Link>
    //     </strong>{" "}
    //     data into the pool of database.
    //   </p>

    //   <p className="leading-10 mb-4">
    //     Web geeks are welcomed to access the{" "}
    //     <strong>
    //       <Link
    //         to="https://www.github.com/kcvijay/helsinki-citybike"
    //         target="_blank noreferer"
    //       >
    //         source code
    //       </Link>{" "}
    //     </strong>
    //     at GitHub.
    //   </p>
    //   <p className="text-xl mb-4">Happy browsing.</p>
    // </div>
    <div className="wrapper md:grid grid-4fr-2fr min-h-[50vh]">
      <div className="bg-slate-100 p-[32px]">
        <h2 className="text-[32px] font-bold mb-8">About This Project</h2>
        <p className="leading-10 mb-4">
          The purpose of this application is to show and visualize both consumer
          riding journeys and, the information about CityBike Helsinki bicycle
          stations in Helsinki and Espoo area. At this moment, there are over 2
          millions of journey data are available between May 2021 and July 2021
          along with 457 bicycle stations.
        </p>

        <p className="leading-10 mb-4">
          Web geeks are welcomed to access the{" "}
          <strong>
            <Link
              to="https://www.github.com/kcvijay/helsinki-citybike"
              target="_blank noreferer"
            >
              source code
            </Link>{" "}
          </strong>
          at GitHub.
        </p>
        <p className="text-xl mb-4">Happy browsing.</p>
      </div>
      <div className="hidden md:block bg-cycle max-w-full max-h-full bg-cover bg-right"></div>
    </div>
  );
};

export default About;
