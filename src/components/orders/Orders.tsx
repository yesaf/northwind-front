import React, { useEffect, useState } from 'react';
import Table from '../UI/table/Table';
import { ordersData } from '../../tmp/data';
import { Order } from '../../types/ServerResponses';
import { OrdersService } from '../../services/Services';
import { useAppDispatch } from '../../hooks/redux';
import { logSlice } from '../../store/reducers/LogSlice';
import { createLog } from '../../helpers/createLog';

function Orders() {
    const limit = 20;
    const [orders, setOrders] = useState<undefined | Order[]>();
    const service = new OrdersService();
    const dispatch = useAppDispatch();
    const addLog = logSlice.actions.addLog;
    const addResultCount = logSlice.actions.addResultCount;

    const getOrders = (page: number) => {
        service.getOrders({ limit, page }).then((response) => {
            const results = response.data.data.data;

            dispatch(addLog(createLog(response.data)));
            dispatch(addResultCount(results.length));

            setOrders(results);
        });
    }

    useEffect(() => {
        getOrders(1);
    })

    const setPage = (page: number) => {
        getOrders(page);
    }

    return (
        <>
            {
                orders &&
                <Table
                    title={'Orders'}
                    columns={['Id', 'Total Price', 'Products', 'Quantity', 'Shipped', 'Ship Name', 'City', 'Country']}
                    data={orders}
                    pagesNumber={Math.ceil(ordersData.length / limit)}
                    linksColumn={'Id'}
                    idColumn={'Id'}
                    onPageChange={(newPage) => setPage(newPage)}
                />
            }
        </>
    );
}

export default Orders;
