import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";

const Navbar = () => {
  const { user, logOut } = use(FirebaseAuthContext);
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
    <div className="shadow-md">
      <div className="w-11/12 mx-auto ">
        <div className="flex justify-between p-0 bg-base-100 ">
          <div className="navbar-start flex justify-between  w-full">
            <a className="flex justify-center items-center">
              <img
                className="w-16 h-16 lg:w-25 lg:h-25 md:w-15 md:h-15"
                src={"/image.png"}
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
                      ? "text-[#4fa3d1] underline underline-offset-4 font-bold"
                      : ""
                  }
                  to={"/"}
                >
                  <li className="text-2xl mr-5">Home</li>
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

                <div>
                  {user ? (
                    <>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-[#4fa3d1] underline underline-offset-4 font-bold"
                            : ""
                        }
                        to="/login"
                      >
                        <li className="text-2xl mr-5">Logout</li>
                      </NavLink>

                      <Link to={"/myprofile"}>
                        <img
                          className="w-15 h-15  rounded-2xl"
                          src={`${user ? user.photoURL : ""}`}
                          alt=""
                        />
                      </Link>
                    </>
                  ) : (
                    <>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-[#4fa3d1] underline underline-offset-4 font-bold"
                            : ""
                        }
                        to="/login"
                      >
                        <li className="text-2xl mr-5">Login</li>
                      </NavLink>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-[#4fa3d1] underline underline-offset-4 font-bold"
                            : ""
                        }
                        to="/register"
                      >
                        <li className="text-2xl mr-5">Register</li>
                      </NavLink>
                    </>
                  )}
                </div>
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1 items-center">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#4fa3d1] underline underline-offset-4 font-bold"
                    : ""
                }
                to={"/"}
              >
                <li className="text-2xl mr-5">Home</li>
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
                    <Link to="/login">
                      <button className="text-2xl bg-blue-500 text-white px-4 py-2 rounded-lg">
                        Login
                      </button>
                    </Link>
                    <Link to="/signup">
                      <button className="text-2xl bg-green-500 text-white px-4 py-2 rounded-lg">
                        Signup
                      </button>
                    </Link>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleLogout} // You should define this function
                      className="text-2xl bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                      Logout
                    </button>

                    <Link to="/myprofile">
                      <img
                        className="w-[60px] h-[60px] object-cover rounded-2xl"
                        src={user.photoURL}
                        alt="User Profile"
                      />
                    </Link>
                  </>
                )}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
