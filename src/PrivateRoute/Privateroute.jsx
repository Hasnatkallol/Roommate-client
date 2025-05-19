import React, { use } from "react";
import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../Components/Loading";

const Privateroute = ({ children }) => {
  const { user, loading } = use(FirebaseAuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default Privateroute;
