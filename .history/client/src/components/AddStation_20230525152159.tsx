import React, { useState, useEffect, ChangeEvent } from "react";
import { ToastContainer, toast } from "react-toastify";

const AddStation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCaptchaText = () => {
    const textString =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captchaString = "";

    for (let i = 0; i < 7; i++) {
      captchaString += textString.charAt(
        Math.floor(Math.random() * textString.length)
      );
    }
    return captchaString;
  };

  const [captchaText, setCaptchaText] = useState(handleCaptchaText());
  const [captchaInput, setCaptchaInput] = useState("");

  const handleSubmit = () => {
    if (captchaText !== captchaInput) {
      toast.error("Captcha text did not match. Try again.");
    } else {
      toast.success("Welcome!");
    }
  };

  return (
    <div className="wrapper">
      <h2 className="page-header mb-8">Add a Station</h2>
      <ToastContainer />
      <form className="grid col-gap-4 grid-cols-1 md:grid-cols-2 transition-all duration-500">
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

        <div className="input-box">
          <label>Captcha</label>
          <input
            value={captchaText}
            disabled
            required
            className="tracking-[1.5rem] text-slate-800 text-center bg-[url('/src/assets/bg4.jpg')] bg-center"
          ></input>
        </div>
        <div className="input-box">
          <label htmlFor="">Write the text shown</label>
          <input
            type="text"
            id="captcha"
            name="captcha"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCaptchaInput(e.target.value)
            }
          />
        </div>

        <div>
          <button
            type="submit"
            className="btn-secondary"
            onClick={handleSubmit}
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
