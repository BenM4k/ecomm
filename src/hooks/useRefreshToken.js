// import axios from '../api/axios';
// import useAuth from './useAuth';

const useRefreshToken = () => {
    // const { setAuth } = useAuth();

    const accessToken = "benny"

    const refresh = async () => {
        // const response = await axios.get('/refresh', {
        //     withCredentials: true,
        // });
        // setAuth(prev => {
        //     return {
        //         ...prev,
        //         roles: response.data.roles,
        //         accessToken: response.data.accessToken,
        //         userInfo: response.data.userInfo
        //     }
        // });
        // return response.data.accessToken;
        return accessToken;
    }

    return refresh;
}

export default useRefreshToken;