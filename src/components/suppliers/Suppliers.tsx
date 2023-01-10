import React, { useState } from 'react';
import Table from '../UI/table/Table';
import { suppliersData } from '../../tmp/data';
import styled from 'styled-components';

const Avatar = styled.img`
  border-radius: 50%;
`;

const AvatarContainer = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  margin-left: auto;
  margin-right: auto;
`;

const data = suppliersData.map((supplier) => {
    const companyAvatar = supplier.Contact.replace(' ', '-') + '.svg';
    return {
        _avatar: <AvatarContainer>
            <Avatar src={'https://avatars.dicebear.com/v2/initials/' + companyAvatar}/>
        </AvatarContainer>,
        ...supplier,
    };
});

function Suppliers() {

    const [suppliers, setSuppliers] = useState(data.slice(0, 20));

    const setPage = (page: number) => {
        const offset = (page - 1) * 20;
        const limit = 20;
        setSuppliers(data.slice(offset, offset + limit));
    }

    return (
        <Table
            title={'Suppliers'}
            columns={['_avatar', 'Company', 'Contact', 'Title', 'City', 'Country']}
            data={suppliers}
            pagesNumber={Math.ceil(data.length / 20)}
            linksColumn={'Company'}
            idColumn={'Id'}
            onPageChange={(newPage) => setPage(newPage)}
        />
    );
}

export default Suppliers;
