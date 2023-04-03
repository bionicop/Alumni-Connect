import "./leftBar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import Groups3OutlinedIcon from '@mui/icons-material/Groups3Outlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import { Link } from "react-router-dom"

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">

          <div className="home">
            <HomeOutlinedIcon/>
            <Link style={{textDecoration: 'none'}} to="/home">
              <span>Home</span>
            </Link>
          </div>

          <div className="events">
            <EventNoteOutlinedIcon/>
            <Link style={{textDecoration: 'none'}} to="/events">
              <span>Events</span>
            </Link>
          </div>

          <div className="alumni">
            <Groups3OutlinedIcon/>
            <Link style={{textDecoration: 'none'}} to="/alumni">
              <span>Alumni</span>
            </Link>
          </div>

          <div className="awards">
            <EmojiEventsOutlinedIcon/>
            <Link style={{textDecoration: 'none'}} to="/awards">
              <span>Awards</span>
            </Link>
          </div>

          <div className="jobsAndInternships">
            <HomeOutlinedIcon/>
            <Link style={{textDecoration: 'none'}} to="/jobsAndIntern">
              <span>Jobs and Internships</span>
            </Link>
          </div>

          <div className="Posts">
            <PostAddOutlinedIcon/>
            <Link style={{textDecoration: 'none'}} to="/posts">
              <span>Posts</span>
            </Link>
          </div>

        </div>
        <hr/>
        
      </div>
    </div>
  )
}

export default LeftBar