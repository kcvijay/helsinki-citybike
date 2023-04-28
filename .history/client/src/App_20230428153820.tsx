import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Home from "./components/Home";
import Station from "./components/Station";
import Layout from "./pages/Layout";
import AllJourneys from "./components/AllJourneys";
import AllStations from "./components/AllStations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/all-stations" element={<AllStations />}></Route>
          <Route path="/all-journeys" element={<AllJourneys />}></Route>
          <Route path="/all-stations/:id" element={<Station />}></Route>
          <Route path="/about-us" element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
