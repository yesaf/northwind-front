import { Response } from '../types/ServerResponses';

export function createLog(resData: Response<any>) {
    return {
        type: 'sql',
        servedBy: 'some server',
        query: resData.data.sqlString,
        timestamp: 'today',
        duration: 0,
    };
}
