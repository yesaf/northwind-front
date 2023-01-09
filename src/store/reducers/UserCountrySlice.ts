import { createSlice } from '@reduxjs/toolkit';

interface UserCountryState {
    country: string;
}

const initialState: UserCountryState = {
    country: (new Date()).toLocaleTimeString()
};

export const userCountrySlice = createSlice({
    name: 'userTime',
    initialState,
    reducers: {
    }
})
