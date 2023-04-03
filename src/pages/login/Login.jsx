import { Link, Navigate } from "react-router-dom";
import "./login.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { login } = useContext(AuthContext);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the login details are correct
    if (
      (username === "user1" && password === "password1") ||
      (username === "user2" && password === "password2")
    ) {
      login();
      setIsAuthenticated(true);
    } else {
      setErrorMessage("Username or password is incorrect");
    }
  };

  return (
    <>
      {isAuthenticated && <Navigate to="/home" />}
      <div className="login">
        <div className="card">
          <div className="left">
            <h1>Alumni Connect</h1>
            <p>
              Culpa elit deserunt enim pariatur esse ullamco mollit. Nisi ad
              ullamco minim occaecat voluptate commodo. Amet labore occaecat
              officia exercitation est deserunt laboris adipisicing in voluptate
              eu consectetur dolor aliqua. Commodo minim dolor ea labore anim
              deserunt est et do mollit.
            </p>

            <span>Don't have an account?</span>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </div>

          <div className="right">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                name="uname"
                value={username}
                onChange={handleUsernameChange}
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="pass"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <button type="submit">Login</button>
            </form>
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
