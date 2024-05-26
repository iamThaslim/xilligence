
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes() {

    const USER = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData')).token
    : null;

  return USER ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoutes