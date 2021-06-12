import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    function handleRegister(e) {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push("/");
                }
            })
            .catch((e) => {
                alert(e);
            });
    }

    function handleLogin(e) {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push("/");
                }
            })
            .catch((e) => {
                alert(e);
            });
    }
    return (
        <Form className="container">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleLogin}>
                Login
            </Button>
            <Button variant="primary" type="submit" onClick={handleRegister}>
                Sign Up
            </Button>
        </Form>
    );
}

export default Login;
