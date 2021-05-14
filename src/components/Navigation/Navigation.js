import "./Navigation.css";
import { Link } from "react-router-dom";
import {
    NavDropdown,
    Navbar,
    Form,
    Nav,
    FormControl,
    Button,
} from "react-bootstrap";
export default function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>
                <Link to="/">Meals</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to="/team">Team</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/about">About</Link>
                    </Nav.Link>
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
