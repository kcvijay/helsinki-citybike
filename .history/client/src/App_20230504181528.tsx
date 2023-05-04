import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./components/Home";
import AllJourneys from "./components/AllJourneys";
import AllStations from "./components/AllStations";
import NotFound from "./components/NotFound";
import About from "./components/About";
import SingleStation from "./components/SingleStation";
import SingleJourney from "./components/SingleJourney";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/all-journeys" element={<AllJourneys />} />
          <Route path="/:journeyid" element={<SingleJourney />} />
          <Route path="/all-stations" element={<AllStations />} />
          <Route path="/all-stations/:stationid" element={<SingleStation />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
