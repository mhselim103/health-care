import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const { createAccount, updateName, setIsLoading, setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  // const location = useLocation();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  /* const handleName = () => {
    updateName(name);
  }; */
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    createAccount(email, password)
      .then((result) => {
        // setUser(result.user);
        setError("");
        updateName(name);
        setUser(result.user);
        history.push("./home");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        window.location.reload();
        setIsLoading(false);
      });
  };
  return (
    <div className="banner d-flex justify-content-center">
      <div>
        <h3 className="text-center">Create Your Account</h3>
        <Form onSubmit={handleRegister}>
          <Form.Group className="my-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              onBlur={handleNameChange}
              type="Text"
              placeholder="Enter Your Name"
              required
            />
          </Form.Group>
          <Form.Group className="my-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmail}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePassword}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <div>
            <p>{error}</p>
          </div>
          {/* <p className="bg-primary w-100 text-center text-light p-2 cursour rounded-3">
            Sign Up
          </p> */}
          <Button variant="primary" type="submit" className="w-100">
            Register
          </Button>
        </Form>
        <br />
        <p>Already have an account? </p>
        <Link to="/login">Log In Here</Link>
        {/*  <div>
          ---------------------------------------------
          <p className="text-center">Or Sign In with</p>
          <h3>
            <i className="fab fa-facebook text-center bg-dark text-light w-100 cursour rounded-3"></i>
          </h3>
          <h3>
            <i
              onClick={signInUsingGoogle}
              className="fab fa-google text-center bg-dark text-light w-100 cursour rounded-3"
            ></i>
          </h3>
          <h3>
            <i className="fab fa-github text-center bg-dark text-light w-100 cursour rounded-3"></i>
          </h3>
        </div> */}
      </div>
    </div>
  );
};

export default Register;
