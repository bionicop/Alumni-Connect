import "./leftBar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">

          <div className="home">
            <HomeOutlinedIcon/>
            <span>Home</span>
          </div>

          <div className="noticeBoard">
            <HomeOutlinedIcon/>
            <span>Notice Board</span>
          </div>

          <div className="events">
            <HomeOutlinedIcon/>
            <span>Events</span>
          </div>

          <div className="alumni">
            <HomeOutlinedIcon/>
            <span>Alumni</span>
          </div>

          <div className="awards">
            <HomeOutlinedIcon/>
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
      </div>
    </div>
  )
}

export default LeftBar