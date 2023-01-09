import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserTimeState {
    time: Date;
}

const initialState: UserTimeState = {
    time: new Date()
};

export const userTimeSlice = createSlice({
    name: 'userTime',
    initialState,
    reducers: {
        updateTime: (state, action: PayloadAction<Date>) => {
            state.time = action.payload;
        }
    }
})
