import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/user';

// 1. Get all users
export const getUsers = createAsyncThunk('users/getUsers', async () => {
    const res = await axios.get(BASE_URL + '/');
    return res.data;
});

// 2. Add new user
export const addUser = createAsyncThunk('users/addUser', async (newUser) => {
    const res = await axios.post(BASE_URL + '/add', newUser);
    return res.data.user; 
});

// 3. Delete user
export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
    await axios.delete(BASE_URL + '/' + id);
    return id;
});

// 4. Update user
export const updateUser = createAsyncThunk('users/updateUser', async ({ id, updatedData }) => {
    const res = await axios.put(BASE_URL + '/' + id, updatedData);
    return res.data.user;
});

const userSlice = createSlice({
    name: 'users',
    initialState: { userList: [], status: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.fulfilled, (state, action) => {
                state.userList = action.payload;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.userList.push(action.payload);
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.userList = state.userList.filter(u => u._id !== action.payload);
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                const index = state.userList.findIndex(u => u._id === action.payload._id);
                if (index !== -1) {
                    state.userList[index] = action.payload;
                }
            });
    }
});

export default userSlice.reducer;