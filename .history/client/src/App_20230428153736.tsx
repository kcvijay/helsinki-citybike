import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllJourneys from "./components/AllJourneys";
import AllStations from "./components/AllStations";

//Components
import Home from "./components/Home";
import Station from "./components/Station";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/all-stations" element={<AllStations />}></Route>
          <Route path="/all-journeys" element={<AllJourneys />}></Route>
          <Route path="/all-stations/:id" element={<Station />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
