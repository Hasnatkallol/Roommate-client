import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";
import { FaMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut, theme, setTheme } = use(FirebaseAuthContext);
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="shadow-md bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="w-11/12 mx-auto pt-2">
        <div className="flex justify-between p-0 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="navbar-start flex justify-between  w-full">
            <a className="flex justify-center items-center">
              <img
                className="w-16 h-16 lg:w-15 lg:h-15 md:w-15 md:h-15 my-2 rounded-full"
                src={"/image copy.png"}
                alt=""
              />
              <h1 className="font-bold text-3xl"></h1>
            </a>
            <div className="dropdown ">
              <div
                tabIndex={0}
                role="button"
                className=" btn-ghost  mr-2 md:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content right-[1px] bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#4fa3d1]  underline underline-offset-4 font-bold"
                      : ""
                  }
                  to={"/"}
                >
                  <li className="text-2xl mr-5">Home to</li>
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#4fa3d1] underline underline-offset-4 font-bold"
                      : ""
                  }
                  to={"/addtofindroommate"}
                >
                  <li className="text-2xl mr-5">Add to Find Roommate</li>
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#4fa3d1] underline underline-offset-4 font-bold"
                      : ""
                  }
                  to={"/browselisting"}
                >
                  <li className="text-2xl mr-5">Browse Listing</li>
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#4fa3d1] underline underline-offset-4 font-bold"
                      : ""
                  }
                  to={"/mylisting"}
                >
                  <li className="text-2xl mr-5">My Listing</li>
                </NavLink>

                <div className="flex items-center space-x-4">
                  {!user ? (
                    <>
                      <NavLink
                        to="/login"
                        className={({ isActive }) =>
                          isActive
                            ? "text-2xl btn bg-[white] text-black flex justify-center items-center px-4 py-2 rounded-lg"
                            : "text-2xl btn bg-gray-500 text-white px-4 py-2 rounded-lg border-none"
                        }
                      >
                        Login
                      </NavLink>

                      <NavLink
                        to="/signup"
                        className={({ isActive }) =>
                          isActive
                            ? "text-2xl btn bg-[white] text-black flex justify-center items-center px-4 py-2 rounded-lg"
                            : "text-2xl btn bg-gray-500 text-white px-4 py-2 rounded-lg"
                        }
                      >
                        Signup
                      </NavLink>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={handleLogout}
                        className="text-2xl btn bg-red-500 text-white px-4 py-2 rounded-lg"
                      >
                        Logout
                      </button>

                      <a
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={user.displayName}
                      >
                        <img
                          className="w-[60px] h-[60px] object-cover  rounded-2xl"
                          src={user.photoURL}
                          alt="User Profile"
                        />
                      </a>
                      <Tooltip id="my-tooltip" />
                    </>
                  )}
                </div>
                <button onClick={toggleTheme} className="my-2">
                  {theme === "light" ? (
                    <FaMoon size={30} />
                  ) : (
                    <CiSun size={30} />
                  )}
                </button>
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden md:flex  ">
            <ul className="menu menu-horizontal px-1 items-center">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white  underline underline-offset-4 font-bold"
                    : ""
                }
                to={"/"}
              >
                <li className="text-2xl mr-5">Home</li>
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white underline underline-offset-4 font-bold"
                    : ""
                }
                to={"/addtofindroommate"}
              >
                <li className="text-2xl mr-5">Add to Find Roommate</li>
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white underline underline-offset-4 font-bold"
                    : ""
                }
                to={"/browselisting"}
              >
                <li className="text-2xl mr-5">Browse Listing</li>
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white underline underline-offset-4 font-bold"
                    : ""
                }
                to={"/mylisting"}
              >
                <li className="text-2xl mr-5">My Listing</li>
              </NavLink>

              <div className="flex items-center space-x-4">
                {!user ? (
                  <>
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive
                          ? "text-2xl btn bg-[white] text-black flex justify-center items-center px-4 py-2 rounded-lg"
                          : "text-2xl btn bg-gray-500 text-white px-4 py-2 rounded-lg border-none"
                      }
                    >
                      Login
                    </NavLink>

                    <NavLink
                      to="/signup"
                      className={({ isActive }) =>
                        isActive
                          ? "text-2xl btn bg-[white] text-black flex justify-center items-center px-4 py-2 rounded-lg"
                          : "text-2xl btn bg-gray-500 text-white px-4 py-2 rounded-lg"
                      }
                    >
                      Signup
                    </NavLink>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleLogout}
                      className="text-2xl btn bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                      Logout
                    </button>

                    <a
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={user.displayName}
                    >
                      <img
                        className="w-[60px] h-[60px] object-cover  rounded-2xl"
                        src={user.photoURL}
                        alt="User Profile"
                      />
                    </a>
                    <Tooltip id="my-tooltip" />
                  </>
                )}
              </div>

              <button onClick={toggleTheme} className="my-2 mx-2">
                {theme === "light" ? <FaMoon size={30} /> : <CiSun size={30} />}
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
