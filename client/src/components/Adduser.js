import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userslice';

function Adduser() {
    const [show, setShow] = useState(false);
    const [newUser, setNewUser] = useState({ name: '', lastname: '', email: '', age: '', img: '' });
    const dispatch = useDispatch();

    const handleChange = (e) => setNewUser({ ...newUser, [e.target.name]: e.target.value });
    
    const handleSubmit = () => {
        dispatch(addUser(newUser));
        setShow(false);
        setNewUser({ name: '', lastname: '', email: '', age: '', img: '' });
    };

    return (
        <>
            <button className="btn-add" onClick={() => setShow(true)}>➕ Add New Contact</button>
            {show && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Add New Contact</h3>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" name="name" className="form-control" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" name="lastname" className="form-control" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" className="form-control" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            <input type="number" name="age" className="form-control" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Image URL</label>
                            <input type="text" name="img" className="form-control" onChange={handleChange} />
                        </div>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                            <button className="btn-add" onClick={handleSubmit}>Save</button>
                            <button className="btn-delete" onClick={() => setShow(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Adduser;