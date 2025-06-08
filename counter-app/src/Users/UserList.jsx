import { use, useEffect, useRef, useState } from "react";

/**
 * Fetch the 'https://dummyjson.com/users' and return a list of users. 
 */ 
const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [user, setUser] = useState(null);    

    const USERS_ENDPOINT = 'https://dummyjson.com/users';
    
    const showUserDetails = (userId) => {
        fetch(USERS_ENDPOINT + '/' + userId)
        .then(res => { return res.json()})
        .then(data => {
            setUser(data);
        })
        .catch(error => {
            console.error('Logic for error');
            setErrorMessage(error);
        })
        .finally(() => {
            setLoading(false);
        });
    };

    useEffect(() => {
        fetch(USERS_ENDPOINT)
        .then(res => { return res.json()})
        .then(data => {
            setUsers(data.users);
        })
        .catch(error => {
            console.error('Logic for error');
            setErrorMessage(error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Loading ...</div>;
    }

    if (user != null) {
        return (
            <div>
                <h2>Selected User: {user.firstName} {user.lastName}</h2>
            </div>
        )
    }
    return (
        <div>
            <h2>Users List</h2>
            
            {errorMessage != null && <p> Error: {errorMessage}</p>}
            
            {errorMessage === null && 
                <ul>
                {
                    users.length === 0 ? (
                        <p>No Users</p>
                    ) : (
                    users.map(user => 
                        (
                            <li key={user.id} onClick={() => showUserDetails(user.id)}>
                                {user.firstName} {user.lastName}
                            </li>
                        )
                    ))
                }
                </ul>
            }
        </div>
    );
};


export default UserList;