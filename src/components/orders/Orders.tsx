import React, { useState } from 'react';
import Table from '../UI/table/Table';
import { ordersData } from '../../tmp/data';


function Orders() {

    const perPage = 20;
    const [orders, setOrders] = useState(ordersData.slice(0, 20));

    const setPage = (page: number) => {

        const offset = (page - 1) * perPage;
        setOrders(ordersData.slice(offset, offset + perPage));
    }

    return (
        <Table
            title={'Orders'}
            columns={['Id', 'Total Price', 'Products', 'Quantity', 'Shipped', 'Ship Name', 'City', 'Country']}
            data={orders}
            pagesNumber={Math.ceil(ordersData.length / perPage)}
            linksColumn={'Id'}
            idColumn={'Id'}
            onPageChange={(newPage) => setPage(newPage)}
        />
    );
}

export default Orders;
