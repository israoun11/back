import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/userslice';
import Usercard from './Usercard';

function Userlist() {
    const dispatch = useDispatch();
    
   
    const usersData = useSelector((state) => state.users.userList);
    const users = Array.isArray(usersData) ? usersData : (usersData?.users || []);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <div className="user-grid">
            {users && users.map((u) => (
                <Usercard key={u._id} user={u} />
            ))}
        </div>
    );
}

export default Userlist;