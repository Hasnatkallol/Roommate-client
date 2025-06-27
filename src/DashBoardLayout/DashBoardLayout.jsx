import React from "react";
import { NavLink, Outlet } from "react-router";
import DashBoardNavbar from "./DashBoardNavbar";

const DashBoardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <DashBoardNavbar />

      {/* Main Content with Sidebar */}
      <div className="flex flex-1 bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-6 flex flex-col">
          <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
          <nav className="flex flex-col space-y-4">
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold border-l-4 border-blue-600 pl-3"
                  : "text-gray-700 hover:text-blue-600 pl-3"
              }
            >
              Dashboard Home
            </NavLink>

            <NavLink
              to="/dashboard/addtofindroommate"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold border-l-4 border-blue-600 pl-3"
                  : "text-gray-700 hover:text-blue-600 pl-3"
              }
            >
              Add to Find Roommate
            </NavLink>

            <NavLink
              to="/dashboard/mylisting"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold border-l-4 border-blue-600 pl-3"
                  : "text-gray-700 hover:text-blue-600 pl-3"
              }
            >
              My Listing
            </NavLink>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashBoardLayout;
