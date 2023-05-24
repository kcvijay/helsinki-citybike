import React, { useState, useEffect } from "react";

const AddStation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="wrapper">
      <h2 className="page-header mb-8">Add a Station</h2>
      <form>
        <div className="input-box">
          <label htmlFor="fid">
            FID<sup className="ml-2">*required</sup>
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
        <div className="input-box">
          <label htmlFor="stationId">
            Station Id<sup className="ml-2">*required</sup>
          </label>
          <input
            type="text"
            pattern="[0-9]"
            id="stationId"
            name="stationId"
            placeholder="Station ID"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="stationId">
            Station Name (FI)<sup className="ml-2">*required</sup>
          </label>
          <input
            type="text"
            id="nimi"
            name="nimi"
            placeholder="Station Name in Finnish"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="namn">
            Station Name (SE)<sup className="ml-2">*required</sup>
          </label>
          <input
            type="text"
            id="namn"
            name="namn"
            placeholder="Station Name in Swedish"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="address">
            Address<sup className="ml-2">*required</sup>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Station Address"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default AddStation;
