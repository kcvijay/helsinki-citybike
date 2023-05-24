import React, { useState, useEffect } from "react";

const AddStation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="wrapper">
      <h2 className="page-header mb-8">Add a Station</h2>
      <form className="grid gap-4 grid-col-1 md:grid-cols-2 transition-all duration-500">
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
            placeholder="Station name in Finnish"
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
            placeholder="Station name in Swedish"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="address">
            Address (FI)<sup className="ml-2">*required</sup>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Station address in Finnish"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="address">
            Adress (SE)<sup className="ml-2">*required</sup>
          </label>
          <input
            type="text"
            id="adress"
            name="adress"
            placeholder="Station address in Swedish"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="city">
            City (FI)<sup className="ml-2">*required</sup>
          </label>
          <select id="city" name="city" defaultValue={"default"} required>
            <option value="default">Choose a city in Finnish</option>
            <option value="Espoo">Espoo</option>
            <option value="Helsinki">Helsinki</option>
          </select>
        </div>
        <div className="input-box">
          <label htmlFor="city">
            City (SE)<sup className="ml-2">*required</sup>
          </label>
          <select id="city" name="city" defaultValue={"default"} required>
            <option value="default">Choose a city in Swedish</option>
            <option value="Espoo">Esbo</option>
            <option value="Helsinki">Helsingfors</option>
          </select>
        </div>

        <div className="input-box">
          <label htmlFor="operator">
            Operator<sup className="ml-2">*required</sup>
          </label>
          <select
            id="operator"
            name="operator"
            defaultValue={"CityBike Finland"}
            required
          >
            <option value="CityBike Finland">CityBike Finland</option>
          </select>
        </div>

        <div className="input-box">
          <label htmlFor="address">
            Capacity<sup className="ml-2">*required</sup>
          </label>
          <input
            type="number"
            id="capacity"
            name="capacity"
            placeholder="Bicycle capacity"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="address">
            Location co-ordinates X<sup className="ml-2">*required</sup>
          </label>
          <input
            type="text"
            pattern="[0-9.]"
            id="x"
            name="x"
            placeholder="Co-ordinates X"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="address">
            Location co-ordinates Y<sup className="ml-2">*required</sup>
          </label>
          <input
            type="text"
            pattern="[0-9.]"
            id="y"
            name="y"
            placeholder="Co-ordinates Y"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="btn-secondary w-full md:w-auto text-center"
          >
            <span className="material-icons align-text-bottom">add</span> Add a
            Station
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStation;
