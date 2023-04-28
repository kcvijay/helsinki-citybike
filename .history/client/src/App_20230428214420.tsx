import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./components/Home";
import AllJourneys from "./components/AllJourneys";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/all-journeys" element={<AllJourneys />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
