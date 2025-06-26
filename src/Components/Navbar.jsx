import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";
import { FaMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut, theme, setTheme } = use(FirebaseAuthContext);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged out successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="navbar py-3 z-50 fixed bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4  shadow-md">
      {/* Left: Logo */}
      <div className="flex-1">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/image copy.png"
            alt="Logo"
            className="w-12 h-12 rounded-full"
          />
          <span className="text-xl font-bold">Roommate Finder</span>
        </Link>
      </div>

      {/* Right: One row for nav links, theme toggle, and auth */}
      <div className="flex items-center gap-3">
        {/* Desktop Nav Links */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#4fa3d1]  underline underline-offset-4 font-bold"
                  : ""
              }
              to={"/"}
            >
              <li className="text-x lg:text-2xl mr-5">Home </li>
            </NavLink>
          <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#4fa3d1]  underline underline-offset-4 font-bold"
                  : ""
              }
              to={"/browselisting"}
            >
              <li className="text-x lg:text-2xl mr-5">Browse Listing </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#4fa3d1]  underline underline-offset-4 font-bold"
                  : ""
              }
              to={"/contactus"}
            >
              <li className="text-x lg:text-2xl mr-5">Contact Us </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#4fa3d1]  underline underline-offset-4 font-bold"
                  : ""
              }
              to={"/aboutus"}
            >
              <li className="text-x lg:text-2xl mr-5">About Us </li>
            </NavLink>
          </ul>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="btn btn-sm btn-circle btn-ghost text-xl"
        >
          {theme === "light" ? <FaMoon /> : <CiSun />}
        </button>

        {/* Auth: Sign In / Avatar */}
        {!user ? (
          <Link to="/login" className="btn btn-sm btn-secondary">
            Sign In
          </Link>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL} alt="Profile" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 text-black rounded-box w-52"
            >
              <li className="text-center font-bold">{user.displayName}</li>
              <li>
                <Link to="/dashboard/addtofindroommate">Dashboard</Link>
              </li>
              <li>
                <button onClick={handleLogout} className="text-red-600">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}

        {/* Mobile Dropdown Nav */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        <ul
  tabIndex={0}
  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
>
  <li>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive
          ? "text-[#4fa3d1] underline underline-offset-4 font-bold"
          : "text-black"
      }
    >
      Home
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/browselisting"
      className={({ isActive }) =>
        isActive
          ? "text-[#4fa3d1] underline underline-offset-4 font-bold"
          : "text-black"
      }
    >
      Browse Listing
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/contactus"
      className={({ isActive }) =>
        isActive
          ? "text-[#4fa3d1] underline underline-offset-4 font-bold"
          : "text-black"
      }
    >
      Contact Us
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/aboutus"
      className={({ isActive }) =>
        isActive
          ? "text-[#4fa3d1] underline underline-offset-4 font-bold"
          : "text-black"
      }
    >
      About Us
    </NavLink>
  </li>
</ul>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
