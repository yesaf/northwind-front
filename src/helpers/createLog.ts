import { OrderWithDetailsResponse, Response } from '../types/ServerResponses';

export function createLog(resData: Response<any>) {
    return {
        type: 'sql',
        servedBy: 'some server',
        query: resData.data.sqlString,
        timestamp: 'today',
        duration: 0,
    };
}

export function createLogOrderDetails(resData: OrderWithDetailsResponse) {
    return [{
        type: 'sql',
        servedBy: 'some server',
        query: resData.orderInformation.sqlString,
        timestamp: 'today',
        duration: 0,
    }, {
        type: 'sql',
        servedBy: 'some server',
        query: resData.productsInOrder.sqlString,
        timestamp: 'today',
        duration: 0,
    }]
}
