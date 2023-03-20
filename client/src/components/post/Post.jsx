import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { makeRequest } from "../../axios.js";
import { AuthContext } from "../../context/authContext";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import Comments from '../comments/Comments'
import moment from "moment"


const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  const {currentUser} = useContext(AuthContext)

  const { isLoading, error, data } = useQuery(["likes", post.id], () =>
    makeRequest.get("/likes?postId=" + post.id).then((res) => {
      return res.data;
    })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (liked) => {
      if(liked) return makeRequest.delete("/likes?postId=" + post.id);
      return makeRequest.post("/likes", { postId: post.id });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["likes"]);
      },
    }
  );

  const handleLike = () => {
    mutation.mutate(data.includes(currentUser.id))
  }

  // const handleDelete = () => {
  //   deleteMutation.mutate(post.id);
  // }

  return (
    <div className="post">
      <div className="container">

        {/* User Section of Post Cards */}
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link to={`/profile/${post.userId}`} style={{ textDecoration:"none", color: "inherit" }} >
                  <span className="name">{post.name}</span>
              </Link>
              <span className="date">{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>

        {/* Content Section of Post Cards */}
        <div className="content">
          <p>{post.desc}</p>
          <img src={"./upload/" + post.img} alt="" />
        </div>

        {/* Info Section of Post Cards */}
        <div className="info">
          <div className="item">
            {isLoading ? ( 
              "Loading..." 
            ) : data.includes(currentUser.id) ? (
            <FavoriteOutlinedIcon 
              style={{ color:"red" }} 
              onClick={handleLike}
            />
            ) : (
              <FavoriteBorderOutlinedIcon onClick={handleLike} />
            )}
            {data?.length} Likes
          </div>
          <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon/>
            12 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon/>
            Share
          </div>
        </div>
        {commentOpen && <Comments postId={post.id}/>}
      </div>
    </div>
  )
}

export default Post