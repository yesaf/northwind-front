import React, { useEffect, useState } from 'react';
import Table from '../UI/table/Table';
import { Order } from '../../types/ServerResponses';
import { OrdersService } from '../../services/Services';
import { useAppDispatch } from '../../hooks/redux';
import { logSlice } from '../../store/reducers/LogSlice';
import { createLog } from '../../helpers/createLog';

function Orders() {
    const limit = 20;
    const [orders, setOrders] = useState<undefined | Order[]>();
    const [count, setCount] = useState(0);
    const service = new OrdersService();
    const dispatch = useAppDispatch();
    const addLog = logSlice.actions.addLog;
    const addResultCount = logSlice.actions.addResultCount;

    const getOrders = (page: number) => {
        service.getOrders({ limit, page }).then((response) => {
            const results = response.data.data.data;

            const resultsPriceRound = results.map((order) => {
                order['Total Price'] = Math.round(order['Total Price'] * 100) / 100;
                return order;
            })

            dispatch(addLog(createLog(response.data)));
            dispatch(addResultCount(results.length));

            setOrders(resultsPriceRound);
        });
    }

    const getOrdersCount = () => {
        service.getRowCount().then((response) => {
            dispatch(addLog(createLog(response.data)));
            setCount(response.data.data.data[0].RowCount);
        });
    }

    useEffect(() => {
        getOrdersCount();
        getOrders(1);
    }, []);

    const setPage = (page: number) => {
        getOrders(page);
    }

    return (
        <>
            {
                orders && count &&
                <Table
                    title={'Orders'}
                    columns={['Id', 'Total Price', 'Products', 'Quantity', 'Shipped', 'Ship Name', 'City', 'Country']}
                    data={orders}
                    pagesNumber={Math.ceil(count / limit)}
                    linksColumn={'Id'}
                    idColumn={'Id'}
                    onPageChange={(newPage) => setPage(newPage)}
                    priceColumns={['Total Price']}
                    dateColumns={['Shipped']}
                />
            }
        </>
    );
}

export default Orders;
