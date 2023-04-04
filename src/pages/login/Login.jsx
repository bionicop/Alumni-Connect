import "./login.scss";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    const { name, email, username, password } = inputs;
    if (!username || !password) {
      setErr("Please fill out all the fields.");
      setMessage(null);
      return;
    }

    try {
      await login(inputs);
      navigate("/")
    } catch (err) {
      setErr(err.response.data);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
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
              name="username"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              required
            />               
              <button onClick={handleLogin}>Login</button>
              <div className="error-message">{err && err}</div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
