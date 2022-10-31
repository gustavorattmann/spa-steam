import Table from 'react-bootstrap/Table';

const TableLayout = (props) => {
    let { columns, data } = props;
      
    return (
        <Table variant="dark" striped bordered hover responsive className="align-middle" id="tabela-mais-jogados">
            <thead>
                <tr>
                {
                    columns.map((column, i) => (
                        <th key={i} className="text-center">
                            { column }
                        </th>
                    ))
                }
                </tr>
            </thead>
            <tbody>
            {
                data.map((cell, i) => (
                    cell === 'Nenhum registro encontrado!' ? 
                    <tr key={i}>
                        <td colSpan={7} className="text-center">
                            Nenhum registro encontrado!
                        </td>
                    </tr>
                    :
                    <tr key={i}>
                        <td className="align-middle text-center px-3">
                            { cell.id }
                        </td>
                        <td className="align-middle px-3">
                            { cell.game }
                        </td>
                        <td className="align-middle px-3">
                            { cell.price }
                        </td>
                        <td className="align-middle text-end px-3">
                            { cell.players }
                        </td>
                        <td className="align-middle text-end px-3">
                            { cell.peak }
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
    )
}

export default TableLayout;