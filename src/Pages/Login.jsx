import React, { useContext, useEffect, useRef, useState } from "react";
import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);
  const navigate = useNavigate();
  const emailRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const { logIn, setUser, setLoading, signInWithGoogle } =
    useContext(FirebaseAuthContext);
  const location = useLocation();
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    setSuccessMessage(false);
    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setErrorMessage("");
        navigate(`${location.state ? location.state : "/"}`);
        setSuccessMessage(true);
      })
      .catch((error) => {
        let message = "";
        switch (error.code) {
          case "auth/user-not-found":
            message = "No account found with this email";
            break;
          case "auth/wrong-password":
            message = "Incorrect Password";
            break;
          case "auth/invalid-email":
            message = "Please enter a valid email address";
            break;
          default:
            message = "Login Failed!";
        }
        setErrorMessage(message);
        setSuccessMessage(false);
        setLoading(false);
      });
  };

  const singInGoogle = () => {
    setSuccessMessage(false);
    signInWithGoogle()
      .then((result) => {
        navigate(`${location.state ? location.state : "/"}`);
        setSuccessMessage(true);
        setUser(result.user);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-11/12 mx-auto my-10 card bg-base-200 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-black font-semibold text-center text-2xl mb-4">
          Login Your Account
        </h1>
        <div className="space-y-3">
          <button onClick={singInGoogle} className="btn w-full btn-outline ">
            <FcGoogle size={24}></FcGoogle>
            Login With Google
          </button>
        </div>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
            ref={emailRef}
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
          <div>
            {errorMessage && (
              <p className="text-red-500 text-center font-bold">
                {errorMessage}
              </p>
            )}
            {successMessage && (
              <p className="text-green-500">User logged in successfully</p>
            )}
          </div>
          <div>
            <a
              href="https://mail.google.com/"
              target="_blank"
              className="link text-blue-800 underline font-semibold link-hover"
            >
              Forgot password?
            </a>
          </div>

          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
        </form>

        <h1 className="text-black font-semibold text-center">
          Don't have an account?{" "}
          <Link className="text-red-600" to={"/signup"} state={location.state}>
            Sign up
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Login;
