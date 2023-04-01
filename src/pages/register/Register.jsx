import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
  return (
    <div className="register">
    <div className="card">
      <div className="left">
        <h1>Alumni Connect</h1>
        <p>Culpa elit deserunt enim pariatur esse ullamco mollit. Nisi ad ullamco minim occaecat voluptate commodo. Amet labore occaecat officia exercitation est deserunt laboris adipisicing in voluptate eu consectetur dolor aliqua. Commodo minim dolor ea labore anim deserunt est et do mollit.</p>

        <span>Have an account?</span>
        <Link to="/login">
          <button>Login</button>
        </Link> 
      </div>

      <div className="right">
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Roll No." />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Register</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Register