import React, { useEffect, useState } from 'react';
import Table from '../UI/table/Table';
import { SuppliersService } from '../../services/Services';
import { Supplier } from '../../types/ServerResponses';
import { useAppDispatch } from '../../hooks/redux';
import { logSlice } from '../../store/reducers/LogSlice';
import { createLog } from '../../helpers/createLog';
import { Avatar, AvatarContainer } from '../../styles/Avatar';

function Suppliers() {
    const limit = 20;
    const service = new SuppliersService();
    const [suppliers, setSuppliers] = useState<undefined | Supplier[]>();
    const [count, setCount] = useState(0);
    const dispatch = useAppDispatch();
    const addLog = logSlice.actions.addLog;
    const addResultCount = logSlice.actions.addResultCount;


    const getSuppliers = (page: number) => {
        service.getSuppliers({ limit, page }).then((response) => {
            const results = response.data.data.data;

            dispatch(addLog(createLog(response.data)));
            dispatch(addResultCount(results.length));

            const resultsWithAvatar = results.map((supplier) => {
                const companyAvatar = supplier.Contact.replace(' ', '-') + '.svg';
                return {
                    _avatar: <AvatarContainer>
                        <Avatar src={'https://avatars.dicebear.com/v2/initials/' + companyAvatar}/>
                    </AvatarContainer>,
                    ...supplier,
                };
            })

            setSuppliers(resultsWithAvatar);
        });
    };

    const getSuppliersCount = () => {
        service.getRowCount().then((response) => {
            dispatch(addLog(createLog(response.data)));
            setCount(response.data.data.data[0].RowCount);
        });
    }

    useEffect(() => {
        getSuppliersCount();
        getSuppliers(1);
    }, []);

    const setPage = (page: number) => {
        getSuppliers(page);
    };

    return (
        <>
            {
                suppliers &&
                <Table
                    title={'Suppliers'}
                    columns={['_avatar', 'Company', 'Contact', 'Title', 'City', 'Country']}
                    data={suppliers}
                    pagesNumber={Math.ceil(count / limit)}
                    linksColumn={'Company'}
                    idColumn={'Id'}
                    onPageChange={(newPage) => setPage(newPage)}
                />
            }
        </>
    );
}

export default Suppliers;
