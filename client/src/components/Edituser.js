import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../redux/userslice';

function Edituser({ user }) {
    const [show, setShow] = useState(false);
    const [updatedData, setUpdatedData] = useState({ ...user });
    const dispatch = useDispatch();

    const handleChange = (e) => setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });

    const handleSave = () => {
        dispatch(updateUser({ id: user._id, updatedData }));
        setShow(false);
    };

    return (
        <>
            <button className="btn-edit" onClick={() => setShow(true)}>Edit</button>
            {show && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Edit Contact</h3>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" name="name" value={updatedData.name} className="form-control" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" name="lastname" value={updatedData.lastname} className="form-control" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" value={updatedData.email} className="form-control" onChange={handleChange} />
                        </div>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                            <button className="btn-add" onClick={handleSave}>Update</button>
                            <button className="btn-delete" onClick={() => setShow(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Edituser;