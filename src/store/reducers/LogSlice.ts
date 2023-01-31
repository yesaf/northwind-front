import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IKeywordsCount {
    select: number;
    where: number;
    leftJoin: number;
}

interface ILog {
    type: string;
    servedBy: string;
    query: string;
    timestamp: string;
    duration: number;
}

interface LogState {
    queryCount: number;
    resultCount: number;
    keywordsCount: IKeywordsCount;
    log: ILog[];
}

const initialState: LogState = {
    queryCount: 0,
    resultCount: 0,
    keywordsCount: {
        select: 0,
        where: 0,
        leftJoin: 0,
    },
    log: [],
};

export const logSlice = createSlice({
    name: 'log',
    initialState,
    reducers: {
        addLog: (state, action: PayloadAction<ILog>) => {
            state.log = [action.payload, ...state.log];
            state.queryCount++;
            state.keywordsCount.select += action.payload.query.split(/select/i).length - 1;
            state.keywordsCount.where += action.payload.query.split(/where/i).length - 1;
            state.keywordsCount.leftJoin += action.payload.query.split(/join/i).length - 1;
        },
        addResultCount: (state, action: PayloadAction<number>) => {
            state.resultCount += action.payload;
        }
    }
})
