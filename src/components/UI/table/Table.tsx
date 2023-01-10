import React, { useState } from 'react';
import Pagination from './Pagination';
import Row from './Row';
import styled from 'styled-components';
import MaterialIcon from '../../../styles/MaterialIcon';

const TableContainer = styled.div`
  background-color: rgb(255 255 255);
`;

const Header = styled.header`
  --tw-border-opacity: 1;
  align-items: stretch;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: rgb(243 244 246/var(--tw-border-opacity));
  display: flex;
`;

const HeaderTitle = styled.span`
  flex-grow: 1;
  font-weight: 700;

  align-items: center;
  display: flex;
  padding: 0.75rem 1rem;
`;

const HeaderIcon = styled(MaterialIcon)`
  align-items: center;
  display: flex;
  padding: 0.75rem 1rem;
`;

interface TableProps {
    columns: string[];
    data: Array<any>;
    pagesNumber: number;
    linksColumn: string;
    idColumn: string;
    title: string;
    onPageChange: (newPage: number) => void;
}

function firstCapital(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function Table(props: TableProps) {
    const [activePage, setActivePage] = useState(1);

    const handlePageChange = (newPage: number) => {
        setActivePage(newPage);
        props.onPageChange(newPage);
    }

    return (
        <TableContainer>
            <Header>
                <HeaderTitle>{props.title}</HeaderTitle>
                <HeaderIcon>redo</HeaderIcon>
            </Header>
            <table>
                <thead>
                {
                    props.columns.map((column, index) => {
                        return (
                            <th key={index}>{column === '_avatar' ? '' : firstCapital(column)}</th>
                        );
                    })
                }
                </thead>
                <tbody>
                {
                    props.data.map((row, index) => {
                        return (
                            <Row
                                key={index}
                                rowData={row}
                                columns={props.columns}
                                linksColumn={props.linksColumn}
                                idColumn={props.idColumn}
                            />
                        );
                    })
                }
                </tbody>
            </table>
            <Pagination pagesNumber={props.pagesNumber} activePage={activePage}
                        onChangePage={(page) => handlePageChange(page)}/>
        </TableContainer>
    );
}


export default Table;
