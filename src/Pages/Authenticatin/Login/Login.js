import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Login.css";

const LogIn = () => {
  const location = useLocation();
  const { signInUsingGoogle, setIsLoading } = useAuth();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  // console.log(location.state?.from);

  const handleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
        // console.log(result);
      })
      .finally(() => setIsLoading(false));
  };
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="d-flex justify-content-center">
      <div>
        <h3 className="text-center">Log In Here</h3>
        <Form>
          <Form.Group className="my-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          {/* <p className="bg-primary w-100 text-center text-light p-2 cursour rounded-3">
            Sign In
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
          <h3>
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
