import "./Navigation.css";
import { LinkContainer } from "react-router-bootstrap";
import { useContext } from "react";
import { MealsContext } from "../../Context";
import { auth } from "../../firebase";
import {
    NavDropdown,
    Navbar,
    Form,
    Nav,
    FormControl,
    Button,
} from "react-bootstrap";

export default function Navigation() {
    const { currentUser, handleLogout } = useContext(MealsContext);

    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand> Meals</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {currentUser && (
                        <LinkContainer to={`/${currentUser.uid}/favorites`}>
                            <Nav.Link>Favorites</Nav.Link>
                        </LinkContainer>
                    )}
                    <LinkContainer to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                    {!currentUser ? (
                        <LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                    ) : (
                        <LinkContainer to="#" onClick={handleLogout}>
                            <Nav.Link>Logout</Nav.Link>
                        </LinkContainer>
                    )}
                </Nav>
                {currentUser && (
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as:{" "}
                            <span className="font-weight-bold">
                                {currentUser.email}
                            </span>
                        </Navbar.Text>
                    </Navbar.Collapse>
                )}
            </Navbar.Collapse>
        </Navbar>
    );
}
