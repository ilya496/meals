import "./Navigation.css";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Form, Nav, FormControl, Button } from "react-bootstrap";
export default function Navigation() {
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
                    <LinkContainer to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}
