import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
        id: 1,
        name: <b>Dummy Profile #1</b>,
        userId: 1,
        profilePic:
          "https://media.discordapp.net/attachments/1021052299256283200/1092180295207366786/img-2.jpg?width=700&height=700",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        img: "https://media.discordapp.net/attachments/1021052299256283200/1092180294926344286/img-1.jpg?width=700&height=700",
      },
      {
        id: 2,
        name: <b>Dummy Profile #2</b>,
        userId: 2,
        profilePic: "https://cdn.discordapp.com/attachments/1021052299256283200/1092180294926344286/img-1.jpg",
        desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
      },
    ];
    
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;