import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div className="banner d-flex justify-content-center">
      <div>
        <h1>Create Account</h1>
        <form>
          <input
            type="text"
            name="yourName"
            id="yourName"
            placeholder="Your Name"
          />
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your email"
          />
          <br />
          <input
            type="password"
            name="password"
            id="pasword"
            placeholder="your password"
          />
        </form>
        <br />
        <p>Already have an account? </p>
        <Link to="/login">Log In Here</Link>
        <div>--------------or------------</div>
        <Button variant="primary" onClick={signInUsingGoogle}>
          Google SignIn
        </Button>
      </div>
    </div>
  );
};

export default Register;
