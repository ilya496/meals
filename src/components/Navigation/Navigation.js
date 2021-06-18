import "./Navigation.css";
import { LinkContainer } from "react-router-bootstrap";
import { useContext } from "react";
import { mealsContext } from "../../context";
import { auth } from "../../firebase";
import { Navbar, Form, Nav, FormControl, Button } from "react-bootstrap";
export default function Navigation() {
    const { currentUser } = useContext(mealsContext);

    function handleLogout(e) {
        e.preventDefault();
        auth.signOut();
    }

    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand> Meals</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/team">
                        <Nav.Link>Team</Nav.Link>
                    </LinkContainer>
                    {currentUser && (
                        <LinkContainer to={`/${currentUser.uid}/favorites`}>
                            <Nav.Link>Favorites</Nav.Link>
                        </LinkContainer>
                    )}
                    <LinkContainer to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>

                    {currentUser ? (
                        <LinkContainer to="#">
                            <Nav.Link onClick={handleLogout}>Log out</Nav.Link>
                        </LinkContainer>
                    ) : (
                        <LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                    )}
                </Nav>
                {currentUser && (
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as:{" "}
                            <span className="fw-700">{currentUser.email}</span>
                        </Navbar.Text>
                    </Navbar.Collapse>
                )}
            </Navbar.Collapse>
        </Navbar>
    );
}
