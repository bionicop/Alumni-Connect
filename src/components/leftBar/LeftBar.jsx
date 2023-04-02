import "./leftBar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import Groups3OutlinedIcon from '@mui/icons-material/Groups3Outlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">

          <div className="home">
            <HomeOutlinedIcon/>
            <span>Home</span>
          </div>

          <div className="events">
            <EventNoteOutlinedIcon/>
            <span>Events</span>
          </div>

          <div className="alumni">
            <Groups3OutlinedIcon/>
            <span>Alumni</span>
          </div>

          <div className="awards">
            <EmojiEventsOutlinedIcon/>
            <span>Awards</span>
          </div>

          <div className="jobsAndInternships">
            <HomeOutlinedIcon/>
            <span>Jobs and Internships</span>
          </div>

          <div className="post">
            <HomeOutlinedIcon/>
            <span>Post</span>
          </div>

        </div>
        <hr/>
        
      </div>
    </div>
  )
}

export default LeftBar