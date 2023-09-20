import { createContext, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const user = { email: 'ben' };
    const userInfo = { firstname: 'Benedict', lastname: 'Makomo', username: 'benM4k' };
    const roles = [
        parseInt(process.env.REACT_APP_ADMIN_ROLE),
        parseInt(process.env.REACT_APP_SELLER_ROLE),
        parseInt(process.env.REACT_APP_USER_ROLE)
    ];
    const accessToken = "ben"
    const [auth, setAuth] = useState({ user, userInfo, roles, accessToken });

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;