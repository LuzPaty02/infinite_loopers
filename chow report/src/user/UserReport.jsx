import React from "react";
import Navbar from "./Navbar";
import Google_Maps from "../maps/google_maps";
import img from "../assets/image.png";

const UserReport = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-origin-border bg-gradient-to-bl from-blue-50 to-indigo-300 flex justify-center items-center">
        <div style={{ position: "relative", padding: "20px", width: "25%" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: 50,
            }}
          />
          <img src={img} alt="" />
          <button
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 transition duration-300 ease-in-out"
          >
            Pan to Current Location
          </button>
        </div> 
      </div>
    </>
  );
};

export default UserReport;
