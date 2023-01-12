import React, { useEffect, useState } from 'react';
import Table from '../UI/table/Table';
import { customersData } from '../../tmp/data';
import { Customer } from '../../types/types';
import { CustomersService } from '../../services/Services';


function Customers() {
    const limit = 20;
    const [customers, setCustomers] = useState<undefined | Customer[]>();
    const service = new CustomersService();

    const getCustomers = (page: number) => {
        service.getCustomers({ limit, page }).then((response) => {
            const data = response.data.data.data;
            setCustomers(data);
        });
    };

    useEffect(() => {
        getCustomers(1);
    }, []);

    const setPage = (page: number) => {
        getCustomers(page);
    };

    return (
        <>
            {
                customers &&
                <Table
                    title={'Customers'}
                    columns={['Company', 'Contact', 'Title', 'City', 'Country']}
                    data={customers}
                    pagesNumber={Math.ceil(customersData.length / limit)}
                    linksColumn={'Company'}
                    idColumn={'Id'}
                    onPageChange={(newPage) => setPage(newPage)}
                />
            }
        </>
    );
}

export default Customers;
