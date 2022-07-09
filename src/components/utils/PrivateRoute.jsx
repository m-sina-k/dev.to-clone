import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthState } from "features/authSlice";

const PrivateRoute = () => {
  const { currentUser } = useSelector(getAuthState);
  return currentUser?.accessToken ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
