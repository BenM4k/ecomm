import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {
        const verifyToken = async () => {
            try {
                await refresh();
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        }

        !auth?.accessToken ? verifyToken() : setIsLoading(false);
    }, [])

    return (
        <>
            {isLoading
                ? <p>Loading...</p>
                : <Outlet />}
        </>
    )
}

export default PersistLogin;