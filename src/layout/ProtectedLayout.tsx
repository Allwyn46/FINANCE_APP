import { Navigate, Outlet } from "react-router";

const ProtectedLayout = () => {
  const isLoggedIn = true;
  return isLoggedIn ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default ProtectedLayout;
