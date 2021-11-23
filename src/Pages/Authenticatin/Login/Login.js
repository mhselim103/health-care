import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Login.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const { signInUsingGoogle, setIsLoading, signInUsingEmailPassword } =
    useAuth();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  // console.log(location.state?.from);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };
  const googleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
        // console.log(result);
      })
      .finally(() => setIsLoading(false));
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    signInUsingEmailPassword(email, password)
      .then((result) => {
        setError("");
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="d-flex justify-content-center">
      <div>
        <h3 className="text-center">Log In Here</h3>
        <Form onSubmit={handleSignIn}>
          <Form.Group className="my-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              onBlur={handleEmail}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              onBlur={handlePassword}
            />
          </Form.Group>
          <div>
            <p>{error}</p>
          </div>
          {/* <p className="bg-primary w-100 text-center text-light p-2 cursour rounded-3">
            Sign In
          </p> */}
          <Button variant="primary" type="submit" className="w-100">
            Log In
          </Button>
        </Form>
        <p className="text-center">
          New to Noble Cure?{" "}
          <Link className="register" to="/register">
            Register
          </Link>
        </p>
        <div>
          ---------------------------------------------
          <p className="text-center">Or Sign In with</p>
          <h3>
            <i className="fab fa-facebook text-center bg-dark text-light w-100 cursour rounded-3"></i>
          </h3>
          <h3 onClick={googleSignIn}>
            <i className="fab fa-google text-center bg-dark text-light w-100 cursour rounded-3"></i>
          </h3>
          <h3>
            <i className="fab fa-github text-center bg-dark text-light w-100 cursour rounded-3"></i>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
