import { useLocation, Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectCurrentToken } from "../redux/slices/authSlice/authSlice";

import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    // const token = useSelector(selectCurrentToken);
    const location = useLocation();

    const { auth } = useAuth();
    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth.user
                ? <Navigate to='/unauthorized' state={{ from: location }} replace />
                : <Navigate to='/sign-in' state={{ from: location }} replace />
    );
}

export default RequireAuth;
