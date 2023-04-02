import "./navbar.scss"
import { Link } from "react-router-dom"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}>
          <span>Alumni Connect</span>
        </Link>

        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search"/>
        </div>

      </div>

      <div className="right">
        <NotificationsOutlinedIcon />
        <ChatBubbleOutlineOutlinedIcon />
        <MailOutlinedIcon />
        <AccountCircleOutlinedIcon />
      </div>
    </div>
  )
}

export default Navbar