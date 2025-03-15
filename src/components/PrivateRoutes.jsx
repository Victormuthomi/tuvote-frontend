import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component }) => {
  const { user } = useSelector((state) => state.auth); // Get user from Redux state

  return user ? <Component /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
