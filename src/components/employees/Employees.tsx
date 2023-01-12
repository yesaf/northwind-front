import React, { useEffect, useState } from 'react';
import Table from '../UI/table/Table';
import { employeesData } from '../../tmp/data';
import styled from 'styled-components';
import { EmployeesService } from '../../services/Services';
import { Employee } from '../../types/types';

const Avatar = styled.img`
  border-radius: 50%;
`;

const AvatarContainer = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  margin-left: auto;
  margin-right: auto;
`;


function Employees() {
    const limit = 20;
    const [employees, setEmployees] = useState<undefined | Employee[]>();
    const service = new EmployeesService();

    const getEmployees = (page: number) => {
        service.getEmployees({ limit, page }).then((response) => {
            const data = response.data.data.data;
            const dataWithAvatar = data.map((supplier) => {
                const employeeAvatar = supplier.Name.replace(' ', '-') + '.svg';
                return {
                    _avatar: <AvatarContainer>
                        <Avatar src={'https://avatars.dicebear.com/v2/initials/' + employeeAvatar}/>
                    </AvatarContainer>,
                    ...supplier,
                };
            });

            setEmployees(dataWithAvatar);
        });
    };

    useEffect(() => {
        getEmployees(1);
    }, []);

    const setPage = (page: number) => {
        getEmployees(page);
    };

    return (
        <>
            {
                employees &&
                <Table
                    title={'Employees'}
                    columns={['_avatar', 'Name', 'Title', 'City', 'Phone', 'Country']}
                    data={employees}
                    pagesNumber={Math.ceil(employeesData.length / limit)}
                    linksColumn={'Name'}
                    idColumn={'Id'}
                    onPageChange={(newPage) => setPage(newPage)}
                />
            }
        </>

    );
}

export default Employees;
