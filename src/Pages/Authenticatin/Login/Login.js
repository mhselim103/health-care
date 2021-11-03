import React from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const LogIn = () => {
  const location = useLocation();
  const { signInUsingGoogle, setIsLoading } = useAuth();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  console.log(location.state?.from);

  const handleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
        console.log(result);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="banner d-flex justify-content-center">
      <div>
        <h1>Log In</h1>
        <form>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your email"
          />
          <br />
          <input type="password" name="password" id="password" />
        </form>
        <p>
          New to Red-Onion? <Link to="/register">Register</Link>
        </p>
        <div>--------------or------------</div>
        <Button variant="primary" onClick={handleSignIn}>
          Google SignIn
        </Button>
      </div>
    </div>
  );
};

export default LogIn;
