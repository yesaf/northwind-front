import React, { useState } from 'react';
import Table from '../UI/table/Table';
import { customersData } from '../../tmp/data';

const customersDataWithId = customersData.map((customer, index) => {
    return {
        Id: index + 1,
        ...customer,
    };
});

function Customers() {

    const perPage = 20;
    const [customers, setCustomers] = useState(customersDataWithId.slice(0, 20));

    const setPage = (page: number) => {
        const offset = (page - 1) * perPage;
        setCustomers(customersDataWithId.slice(offset, offset + perPage));
    };

    return (
        <Table
            title={'Customers'}
            columns={['Company', 'Contact', 'Title', 'City', 'Country']}
            data={customers}
            pagesNumber={Math.ceil(customersDataWithId.length / perPage)}
            linksColumn={'Company'}
            idColumn={'Id'}
            onPageChange={(newPage) => setPage(newPage)}
        />
    );
}

export default Customers;
