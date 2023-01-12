import React, { useEffect, useState } from 'react';
import Table from '../UI/table/Table';
import { ordersData } from '../../tmp/data';
import { Order } from '../../types/types';
import { OrdersService } from '../../services/Services';

function Orders() {
    const limit = 20;
    const [orders, setOrders] = useState<undefined | Order[]>();
    const service = new OrdersService();

    const getOrders = (page: number) => {
        service.getOrders({ limit, page }).then((response) => {
            const data = response.data.data.data;
            setOrders(data);
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
