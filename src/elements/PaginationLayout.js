import Pagination from 'react-bootstrap/Pagination';

const range = (start, end) => {
    return [...Array(end).keys()].map((elem) => elem + start);
}

const PaginationLayout = ({ currentPage, total, limit, onPageChange }) => {
    const contagemPagina = Math.ceil(total / limit);
    const paginas = range(1, contagemPagina);
    
    let items = [];

    paginas.map((pagina) => (
        items.push(
            <Pagination.Item pagina={pagina} key={pagina} currentpage={currentPage} active={pagina === currentPage} onClick={() => onPageChange(pagina)}>
                {pagina}
            </Pagination.Item>
        )
    ));

    return (
        <Pagination className="justify-content-center justify-content-md-end">
            <Pagination.First onClick={() => onPageChange(1)} />
            <Pagination.Prev onClick={() => onPageChange(currentPage - 1)} />
            {items}
            <Pagination.Next onClick={() => onPageChange(currentPage + 1)} />
            <Pagination.Last onClick={() => onPageChange(contagemPagina)} />
        </Pagination>
    );
}

export default PaginationLayout;