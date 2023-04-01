import { Link } from "react-router-dom"
import "./login.scss"

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Alumni Connect</h1>
          <p>Culpa elit deserunt enim pariatur esse ullamco mollit. Nisi ad ullamco minim occaecat voluptate commodo. Amet labore occaecat officia exercitation est deserunt laboris adipisicing in voluptate eu consectetur dolor aliqua. Commodo minim dolor ea labore anim deserunt est et do mollit.</p>

          <span>Don't have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link> 
        </div>

        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login