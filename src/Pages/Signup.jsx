import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  useEffect(() => {
    document.title = "SignUp";
  }, []);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const { createUser, signInWithGoogle, user, setUser, setLoading } =
    useContext(FirebaseAuthContext);

  const handleRegister = (e) => {
    setLoading(true);
    setSuccessMessage(false);
    setErrorMessage("");
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    setErrorMessage("");
    setSuccessMessage(false);

    if (!/(?=.*\d)/.test(password)) {
      setErrorMessage("Password must contain at least one number.");
      return;
    }
    if (!/(?=.*[a-z])/.test(password)) {
      setErrorMessage("Password must contain at least one lowercase letter.");
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      setErrorMessage("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/.{8,}/.test(password)) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setSuccessMessage(true);
      })
      .catch((error) => {
        console.log(error);
        setUser(user);
        setErrorMessage(error.message);
        setLoading(false);
      });
  };

  const singInGoogle = () => {
    setSuccessMessage(false);

    signInWithGoogle()
      .then((result) => {
        navigate(`${location.state ? location.state : "/"}`);

        setUser(result.user);
        setLoading(false);
        setSuccessMessage(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="w-11/12 mx-auto my-10 card bg-base-200   max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-black font-semibold  text-center text-2xl">
            Register Your Account
          </h1>
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="photo link"
              required
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>

            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && (
              <p className="text-green-500">Successfully Sign Up</p>
            )}
          </form>
          <div>
            <button onClick={singInGoogle} className="btn w-full btn-outline ">
              <FcGoogle size={24}></FcGoogle>
              SignUp With Google
            </button>
          </div>
          <h1 className="text-black font-semibold  text-center ">
            Already have an account ?{" "}
            <Link className="text-red-600" to={"/login"}>
              Login
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Signup;
