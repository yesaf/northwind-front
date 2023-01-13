import React, { useEffect, useState } from 'react';
import Table from '../UI/table/Table';
import { customersData } from '../../tmp/data';
import { Customer } from '../../types/ServerResponses';
import { CustomersService } from '../../services/Services';
import { useAppDispatch } from '../../hooks/redux';
import { logSlice } from '../../store/reducers/LogSlice';
import { createLog } from '../../helpers/createLog';


function Customers() {
    const limit = 20;
    const [customers, setCustomers] = useState<undefined | Customer[]>();
    const service = new CustomersService();
    const dispatch = useAppDispatch();
    const addLog = logSlice.actions.addLog;
    const addResultCount = logSlice.actions.addResultCount;

    const getCustomers = (page: number) => {
        service.getCustomers({ limit, page }).then((response) => {
            const results = response.data.data.data;

            dispatch(addLog(createLog(response.data)));
            dispatch(addResultCount(results.length));

            setCustomers(results);
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
