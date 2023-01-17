import React, { useEffect, useState } from 'react';
import Table from '../UI/table/Table';
import { EmployeesService } from '../../services/Services';
import { Employee } from '../../types/ServerResponses';
import { useAppDispatch } from '../../hooks/redux';
import { logSlice } from '../../store/reducers/LogSlice';
import { createLog } from '../../helpers/createLog';
import { Avatar, AvatarContainer } from '../../styles/Avatar';


function Employees() {
    const limit = 20;
    const [employees, setEmployees] = useState<undefined | Employee[]>();
    const [count, setCount] = useState(0);
    const service = new EmployeesService();
    const dispatch = useAppDispatch();
    const addLog = logSlice.actions.addLog;
    const addResultCount = logSlice.actions.addResultCount;

    const getEmployees = (page: number) => {
        service.getEmployees({ limit, page }).then((response) => {
            const results = response.data.data.data;

            dispatch(addLog(createLog(response.data)));
            dispatch(addResultCount(results.length));

            const resultsWithAvatar = results.map((supplier) => {
                const employeeAvatar = supplier.Name.replace(' ', '-') + '.svg';
                return {
                    _avatar: <AvatarContainer>
                        <Avatar src={'https://avatars.dicebear.com/v2/initials/' + employeeAvatar}/>
                    </AvatarContainer>,
                    ...supplier,
                };
            });

            setEmployees(resultsWithAvatar);
        });
    };

    const getEmployeesCount = () => {
        service.getRowCount().then((response) => {
            dispatch(addLog(createLog(response.data)));
            setCount(response.data.data.data[0].RowCount);
        });
    }

    useEffect(() => {
        getEmployeesCount();
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
                    pagesNumber={Math.ceil(count / limit)}
                    linksColumn={'Name'}
                    idColumn={'Id'}
                    onPageChange={(newPage) => setPage(newPage)}
                />
            }
        </>

    );
}

export default Employees;
