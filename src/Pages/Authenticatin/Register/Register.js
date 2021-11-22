import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const { signInUsingGoogle } = useAuth();
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="banner d-flex justify-content-center">
      <div>
        <h3 className="text-center">Create Your Account</h3>
        <Form>
          <Form.Group className="my-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="Text" placeholder="Enter Your Name" required />
          </Form.Group>
          <Form.Group className="my-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          {/* <p className="bg-primary w-100 text-center text-light p-2 cursour rounded-3">
            Sign Up
          </p> */}
          <Button
            variant="primary"
            type="submit"
            className="w-100"
            onClick={handleClick}
          >
            Submit
          </Button>
        </Form>
        <br />
        <p>Already have an account? </p>
        <Link to="/login">Log In Here</Link>
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default Register;
