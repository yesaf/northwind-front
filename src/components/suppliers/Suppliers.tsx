import React, { useEffect, useState } from 'react';
import Table from '../UI/table/Table';
import { suppliersData } from '../../tmp/data';
import styled from 'styled-components';
import { SuppliersService } from '../../services/Services';
import { Supplier } from '../../types/types';

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

    const getSuppliers = (page: number) => {
        service.getSuppliers({ limit, page }).then((response) => {
            const data = response.data.data.data;
            const dataWithAvatar = data.map((supplier) => {
                const companyAvatar = supplier.Contact.replace(' ', '-') + '.svg';
                return {
                    _avatar: <AvatarContainer>
                        <Avatar src={'https://avatars.dicebear.com/v2/initials/' + companyAvatar}/>
                    </AvatarContainer>,
                    ...supplier,
                };
            })

            setSuppliers(dataWithAvatar);
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
