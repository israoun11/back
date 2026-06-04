import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../redux/userslice';
import Edituser from './Edituser';

function Usercard({ user }) {
    const dispatch = useDispatch();

    return (
        <div className="user-card">
            <img src={user.img || "https://via.placeholder.com/100"} alt="avatar" className="card-avatar" />
            <h3 className="card-name">{user.name} {user.lastname}</h3>
            <p className="card-email">{user.email}</p>
            <div className="info-badge">
                <div><strong>Age:</strong> {user.age} yrs</div>
                <div><strong>Role:</strong> {user.isAdmin ? '👑 Admin' : '👤 User'}</div>
            </div>
            <div className="card-buttons">
                <Edituser user={user} />
                <button className="btn-delete" onClick={() => dispatch(deleteUser(user._id))}>Delete</button>
            </div>
        </div>
    );
}

export default Usercard;