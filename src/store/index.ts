import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userTimeSlice } from './reducers/UserTimeSlice';
import { logSlice } from './reducers/LogSlice';

const rootReducer = combineReducers({
    userTime: userTimeSlice.reducer,
    log: logSlice.reducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
