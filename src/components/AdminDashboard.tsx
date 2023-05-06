import React from "react";
import Navbar from "./Navbar";
import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {
  return (
    <main className="min-h-screen w-full bg-white border-l">
      <Navbar />
      <div className="flex items-center ">
        <AdminSidebar />
        <div className="flex ml-7 justify-center mt-5 justify-center">
          <h1 className="text-3xl font-bold tracking-wider text-gray-800 mb-4 capitalize text-white-300">
            This is the admin dashboard
          </h1>
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;
