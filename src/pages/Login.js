import React from "react";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import { auth } from "../firebase";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import './Login.css'
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function handleRegister(e) {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error));
  }

  function handleLogin(e) {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error));
  }
  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="login-inner-container">
      <Container >
        <Row>
          <Col xs={12} md={6}>
            <Form>
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
                Register
              </Button>
            </Form>
          </Col>

          <Col xs={0} md={6} className="login-image-container">
            
                  <Image
                    src="https://images.unsplash.com/photo-1612392062335-300bb9bd3054?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    rounded
                    style={{ width: "100%" }}
                  />
           
          </Col>
        </Row>
      </Container>
      
    </div>
    </div>
  );
}

export default Login;
