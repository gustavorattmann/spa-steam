import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

import logo from '../images/logo.svg';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    src={logo}
                    className="d-inline-block align-top"
                    alt="Logo Steam"
                    />
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#home"><FontAwesomeIcon icon={faHouse} /> Início</Nav.Link>
                    <Nav.Link href="#features">Sobre</Nav.Link>
                    <Nav.Link href="#pricing">Contato</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;