import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth;

    const refresh = async () => {
        const response = await axios.get('/api/refresh', {
            withCredentials: true,
        });
        setAuth(prev => {
            console.log(prev);
            console.log(response.data.useRefreshToken);
            return { ...prev, accessToken: response.data.refreshToken }
        });
        return response.data.refreshToken;
    }

    return refresh;
}

export default useRefreshToken;