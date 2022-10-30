import { useTable } from 'react-table';

import Table from 'react-bootstrap/Table';

const TableLayout = (props) => {
    let { columns, data } = props;

    const tabela = useTable({ columns, data });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tabela
      
    return (
        <Table variant="dark" striped bordered hover responsive {...getTableProps()}>
            <thead>
            {
                headerGroups.map(headerGroup => (
                    <tr className="align-middle text-center" { ...headerGroup.getHeaderGroupProps() }>
                        {
                            headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>
                                { column.render('Header') }
                            </th>
                            ))
                        }
                    </tr>
                ))
            }
            </thead>
            <tbody {...getTableBodyProps()}>
            {
                rows.map(row => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                        {
                            row.cells.map(cell => {
                                console.log(cell.columns)

                                return (
                                    <td className="align-middle" {...cell.getCellProps()}>
                                        { cell.render('Cell') }
                                    </td>
                                )
                            })
                        }
                        </tr>
                    );
                })
            }
            </tbody>
        </Table>
    )
}

export default TableLayout;