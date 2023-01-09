import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserTimeState {
    time: string;
}

const initialState: UserTimeState = {
    time: (new Date()).toLocaleTimeString()
};

export const userTimeSlice = createSlice({
    name: 'userTime',
    initialState,
    reducers: {
        updateTime: (state, action: PayloadAction<string>) => {
            state.time = action.payload;
        }
    }
})
