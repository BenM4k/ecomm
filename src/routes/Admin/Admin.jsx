import React from 'react';
import useRefreshToken from '../../hooks/useRefreshToken';

const Admin = () => {
    const refresh = useRefreshToken();
    return (
        <div>
            <button onClick={() => refresh()}>refresh</button>
        </div>
    )
}

export default Admin