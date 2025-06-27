import React, { useContext } from "react";
import { Link } from "react-router";
import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";
import { FaSignOutAlt } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const DashBoardNavbar = () => {
  const { user, logout } = useContext(FirebaseAuthContext);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <nav className="w-full bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/image copy.png"
            alt="RoommateFind Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-xl font-semibold text-gray-800">RoommateFind</span>
        </Link>

        {/* Right: User Info + Logout */}
        <div className="flex items-center gap-4">
          {user && (
            <>
              <div
                data-tooltip-id="user-tooltip"
                data-tooltip-content={user.displayName}
              >
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 object-cover rounded-full border border-gray-300"
                />
              </div>
              <Tooltip id="user-tooltip" />

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-600 transition"
              >
                <FaSignOutAlt /> Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default DashBoardNavbar;
