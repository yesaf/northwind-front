import { OrderWithDetailsResponse, Response } from '../types/ServerResponses';

export function createLog(resData: Response<any>) {
    return {
        type: 'sql',
        servedBy: resData.data.servedBy,
        query: resData.data.sqlString,
        timestamp: resData.data.ts,
        duration: resData.data.duration,
    };
}

export function createLogOrderDetails(resData: OrderWithDetailsResponse) {
    return [{
        type: 'sql',
        servedBy: resData.orderInformation.servedBy,
        query: resData.orderInformation.sqlString,
        timestamp: resData.orderInformation.ts,
        duration: resData.orderInformation.duration,
    }, {
        type: 'sql',
        servedBy: resData.productsInOrder.servedBy,
        query: resData.productsInOrder.sqlString,
        timestamp: resData.productsInOrder.ts,
        duration: resData.productsInOrder.duration,
    }]
}
