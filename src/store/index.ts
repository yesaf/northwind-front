import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userTimeSlice } from './reducers/UserTimeSlice';

const rootReducer = combineReducers({
    userTime: userTimeSlice.reducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
