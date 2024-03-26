import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  // when a user is redirected to a login page due to not being authenticated, using replace ensures that the login page replaces the current page in the history stack. This way, if the user clicks the back button, they won't be taken back to the page they were redirected from
  return userInfo && userInfo.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default AdminRoute;
