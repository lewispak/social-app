import "./post.scss"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";


const post = ({post}) => {
  return (
    <div className="post">
      <div className="container">

        {/* User Section of Post Cards */}
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link to={`/profile/${post.userId}`} style={{textDecoration:"none"}} color="inherit">
                  <span className="name">{post.name}</span>
              </Link>
                  <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>

        {/* Content Section of Post Cards */}
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>

        {/* Info Section of Post Cards */}
        <div className="info">

        </div>
      </div>
    </div>
  )
}

export default post