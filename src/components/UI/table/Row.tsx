import React from 'react';
import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';

const TableRow = styled.tr`
  display: table-row;
  max-width: 100%;
  position: relative;
`;

const TableCell = styled.td`
  display: table-cell;
  text-align: left;
  vertical-align: middle;
  border-bottom-width: 0;

  padding: 0.5rem 0.75rem;
`;

interface RowProps {
    rowData: any;
    linksColumn: string;
    columns: string[];
    idColumn: string;
    priceColumns: string[];
    dateColumns: string[];
}

function Row(props: RowProps) {
    const location = useLocation();

    return (
        <TableRow>
            {
                props.columns.map((key, index) => {
                    let value = props.rowData[key];
                    if (props.priceColumns.includes(key)) {
                        value = '$' + value;
                    }
                    if (props.dateColumns.includes(key)) {
                        value = value.slice(0, 10);
                    }
                    return (
                        <TableCell key={index}>
                            {
                                key === props.linksColumn ?
                                    <Link to={`${location.pathname.slice(0, -1)}/${props.rowData[props.idColumn]}`}>
                                        {value}
                                    </Link>
                                        :
                                    value
                            }
                        </TableCell>
                    )
                })
            }
        </TableRow>
    );
}

export default Row;
