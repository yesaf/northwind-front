import React, { useEffect, useState } from 'react';
import Table from '../UI/table/Table';
import { suppliersData } from '../../tmp/data';
import styled from 'styled-components';
import { SuppliersService } from '../../services/Services';
import { Supplier } from '../../types/ServerResponses';
import { useAppDispatch } from '../../hooks/redux';
import { logSlice } from '../../store/reducers/LogSlice';
import { createLog } from '../../helpers/createLog';

const Avatar = styled.img`
  border-radius: 50%;
`;

const AvatarContainer = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  margin-left: auto;
  margin-right: auto;
`;

function Suppliers() {
    const limit = 20;
    const service = new SuppliersService();
    const [suppliers, setSuppliers] = useState<undefined | Supplier[]>();
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

    useEffect(() => {
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
                    pagesNumber={Math.ceil(suppliersData.length / 20)}
                    linksColumn={'Company'}
                    idColumn={'Id'}
                    onPageChange={(newPage) => setPage(newPage)}
                />
            }
        </>
    );
}

export default Suppliers;
