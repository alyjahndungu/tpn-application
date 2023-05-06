import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Dashboard = ({ children }: any) => {
  return (
    <main className="min-h-screen w-full bg-white border-l">
      <Navbar />
      <div className="flex items-center ">
        <Sidebar />
        <div className="flex ml-7 justify-center mt-5 justify-center">
          <h1 className="text-3xl font-bold tracking-wider text-gray-800 mb-4 capitalize text-white-300">
            This is the default dashboard
          </h1>
          {children}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
