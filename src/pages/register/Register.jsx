import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleRollNoChange = (event) => {
    setRollNo(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all fields are filled
    if (!email || !fullName || !rollNo || !username || !password || !confirmPassword) {
      setErrorMessage("Please fill all fields");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // TODO: Perform registration logic here

    setIsRegistered(true);
  };

  if (isRegistered) {
    return <Navigate to="/" />;
  }

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

          <span>Have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>

        <div className="right">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={handleFullNameChange}
              required
            />
            <input
              type="text"
              placeholder="Roll No."
              value={rollNo}
              onChange={handleRollNoChange}
              required
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            <button type="submit">Register</button>
          </form>
          {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
      </div>
    </div>
  </div>
  )
}

export default Register