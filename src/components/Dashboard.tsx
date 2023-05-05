import React from "react";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center mt-5 justify-center">
        <h1 className="text-3xl font-bold tracking-wider text-white-800 mb-4 capitalize text-white-300">
          This is the main dashboard
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;
