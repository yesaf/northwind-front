import React, { useState } from 'react';
import Pagination from './Pagination';
import Row from './Row';
import { TableContainer, Header, HeaderIcon, HeaderTitle} from './Table.styles'

interface TableProps {
    columns: string[];
    data: Array<any>;
    pagesNumber: number;
    linksColumn: string;
    idColumn: string;
    title: string;
    onPageChange: (newPage: number) => void;
    priceColumns: string[];
    dateColumns: string[];
}

function firstCapital(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function Table(props: TableProps) {
    const [activePage, setActivePage] = useState(1);

    const handlePageChange = (newPage: number) => {
        setActivePage(newPage);
        props.onPageChange(newPage);
    };

    return (
        <TableContainer>
            <Header>
                <HeaderTitle>{props.title}</HeaderTitle>
                <HeaderIcon>redo</HeaderIcon>
            </Header>
            <table>
                <thead>
                <tr>
                    {
                        props.columns.map((column, index) => {
                            return (
                                <th key={index}>{column === '_avatar' ? '' : firstCapital(column)}</th>
                            );
                        })
                    }
                </tr>

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
                                priceColumns={props.priceColumns}
                                dateColumns={props.dateColumns}
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

Table.defaultProps = {
    priceColumns: [],
    dateColumns: []
}


export default Table;
