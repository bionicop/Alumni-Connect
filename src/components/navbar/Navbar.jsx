import "./navbar.scss"
import { Link } from "react-router-dom"
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);

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
      </div>
    </div>
  )
}

export default Navbar