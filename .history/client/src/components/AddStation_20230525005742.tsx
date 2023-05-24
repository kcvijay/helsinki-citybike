import React, { useState, useEffect } from "react";

const AddStation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="wrapper">
      <h2 className="page-header">Add a Station</h2>
      <form>
        <div>
          <label htmlFor="fid">
            FID<sup>*required</sup>
          </label>
          <input
            type="text"
            pattern="[0-9]"
            id="fid"
            name="fid"
            placeholder="FID"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default AddStation;
