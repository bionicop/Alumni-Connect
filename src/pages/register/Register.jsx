import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
  
    const { name, email, username, password } = inputs;
    if (!name || !email || !username || !password) {
      setErr("Please fill out all the fields.");
      setMessage(null);
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:8800/api/auth/register", inputs);
      setMessage(response.data);
      setErr(null);
    } catch (err) {
      setErr(err.response.data);
      setMessage(null);
    }
  };  

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Alumni Connect</h1>
          <p>
            Culpa elit deserunt enim pariatur esse ullamco mollit. Nisi ad ullamco
            minim occaecat voluptate commodo. Amet labore occaecat officia
            exercitation est deserunt laboris adipisicing in voluptate eu
            consectetur dolor aliqua. Commodo minim dolor ea labore anim deserunt
            est et do mollit.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
          <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <p></p>
            <button onClick={handleClick}>Register</button>
            <div className="error-message">{message && <p>{message}</p>}{err && <p>{err}</p>}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
