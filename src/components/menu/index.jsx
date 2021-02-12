import React from 'react';
import {useHistory} from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import jwt_decode from 'jwt-decode';

const Menu = () => {

    const history = useHistory();

    const sair = (event) => {
        event.preventDefault();
        localStorage.removeItem('token-codetur')

        history.push('/');
    }

    const renderMenu = () => {
        const token = localStorage.getItem('token-codetur');

        if(token !== null){
            return (
                <Nav>
                    <Nav.Link href="/admin/dashboard">dashboard</Nav.Link>
                    <Nav.Link href="/admin/pacotes">pacotes</Nav.Link>
                    <NavDropdown title={jwt_decode(token).family_name} id="basic_Nav_Dropdown"  >
                        <NavDropdown.Item href="/perfil" >Perfil</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item onClick={event => sair(event)}>Sair</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            )
        }
    }


    return(
        <Navbar bg="light" expand="lg">
            {/* <Navbar.Brand href="/" ><img src={logo} alt="CodeTur" style={{width : '64px'}} /></Navbar.Brand> */}
            <Navbar.Toggle  aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                    {renderMenu()}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Menu;