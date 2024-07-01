/* eslint-disable react-hooks/rules-of-hooks */
import { ReactNode, useContext } from "react";
import { AuthContext } from "./AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }: { children: ReactNode }) => {
  const context = useContext(AuthContext);
  const location = useLocation();

  if (!context) {
    return <p>There is no user</p>;
  }

  const { user, loading } = context;

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
