import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import "./login.scss";
import { AuthContext } from "../../context/authContext";
const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
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
          <form>
          <input
                type="text"
                placeholder="Username"
                name="uname"
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="pass"
                required
              />
              <button type="submit">Login</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Login;