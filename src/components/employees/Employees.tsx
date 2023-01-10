import React, { useState } from 'react';
import Table from '../UI/table/Table';
import { employeesData } from '../../tmp/data';
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

const employeesDataWithAvatar = employeesData.map((supplier) => {
    const companyAvatar = supplier.Name.replace(' ', '-') + '.svg';
    return {
        _avatar: <AvatarContainer>
            <Avatar src={'https://avatars.dicebear.com/v2/initials/' + companyAvatar}/>
        </AvatarContainer>,
        ...supplier,
    };
});

function Employees() {
    const perPage = 20;
    const [employees, setEmployees] = useState(employeesDataWithAvatar.slice(0, 20));

    const setPage = (page: number) => {

        const offset = (page - 1) * perPage;
        setEmployees(employeesDataWithAvatar.slice(offset, offset + perPage));
    }

    return (
        <Table
            title={'Employees'}
            columns={['_avatar', 'Name', 'Title', 'City', 'Phone', 'Country']}
            data={employees}
            pagesNumber={Math.ceil(employeesDataWithAvatar.length / perPage)}
            linksColumn={'Name'}
            idColumn={'Id'}
            onPageChange={(newPage) => setPage(newPage)}
        />
    );
}

export default Employees;
