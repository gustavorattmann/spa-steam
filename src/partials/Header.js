import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faHeadset, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

import logo from '../assets/images/logo_steam.svg';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                    src={logo}
                    className="d-inline-block align-top"
                    alt="Logo Steam"
                    width="176"
                    height="44"
                    />
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/"><FontAwesomeIcon icon={faHouse} /> Início</Nav.Link>
                    <Nav.Link as={Link} to="/sobre"><FontAwesomeIcon icon={faCircleInfo} /> Sobre</Nav.Link>
                    <Nav.Link as={Link} to="/contato"><FontAwesomeIcon icon={faHeadset} /> Contato</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;