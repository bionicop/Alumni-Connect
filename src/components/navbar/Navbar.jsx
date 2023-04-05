import "./navbar.scss"
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const hanleClick = async (e) => {
    e.preventDefault();

    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.log("Logout failed with error:" + err);
    }
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}>
          <span>GradLink</span>
        </Link>
        <br/>

        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search"/>
        </div>
      </div>

      <div className="right">
        <Link style={{textDecoration: 'none'}} to="/login">
          <AccountCircleOutlinedIcon />
        </Link>
        <NotificationsOutlinedIcon />
        <ChatBubbleOutlineOutlinedIcon />
        <LogoutIcon onClick={hanleClick} />
      </div>
    </div>
  )
}

export default Navbar;