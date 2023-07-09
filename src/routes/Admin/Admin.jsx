import React, { useEffect, useState } from 'react';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const Admin = () => {
    const axiosPrivate = useAxiosPrivate();
    const [users, setUsers] = useState();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/users', {
                    signal: controller.signal
                });
                isMounted && setUsers(response.data);
            } catch (err) {
                console.log(err);
                // navigate('/sign-in', { state: { from: location }, replace: true });
            }
        }

        getUsers()

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

    return (
        <div>
            <div className="users">
                <h2>Users List</h2>
                {users?.length
                    ? (
                        <ul>
                            {users.map((user, i) => <li key={i}>{user?.firstname}</li>)}
                        </ul>
                    ) : <p>No users to display</p>}
            </div>
        </div>
    )
}

export default Admin