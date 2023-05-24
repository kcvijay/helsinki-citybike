import React, { useState, useEffect } from "react";

const AddStation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="wrapper">
      <h2 className="page-header">Add a Station</h2>
    </div>
  );
};

export default AddStation;
