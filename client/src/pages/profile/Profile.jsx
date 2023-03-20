import './profile.scss'

import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"

import { makeRequest } from "../../axios.js";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Profile = () => {

  const { currentUser } = useContext(AuthContext);

  const userId = parseInt(useLocation().pathname.split("/")[2]); 

  const { isLoading, error, data } = useQuery(["user"], () =>
    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );

  console.log(data)

  return (
    <div className='profile'>
      {isLoading ? (
        "Loading..."
        ) : (
        <>
          <div className="images">
            <img src={data.coverPic} alt="" className="cover" />
            <img src={data.profilePic} alt="" className="profilePic" />
          </div>

          <div className="profileContainer">

            <div className="uInfo">

              {/* Social Icons */}
              <div className="left">
                <a href="http://facebook.com">
                  <FacebookTwoToneIcon fontSize="medium" />
                </a>
                <a href="http://facebook.com">
                  <InstagramIcon fontSize="medium" />
                </a>
                <a href="http://facebook.com">
                  <TwitterIcon fontSize="medium" />
                </a>
                <a href="http://facebook.com">
                  <LinkedInIcon fontSize="medium" />
                </a>
                <a href="http://facebook.com">
                  <PinterestIcon fontSize="medium" />
                </a>
              </div>

              {/* User Info */}
              <div className="center">
                <span>Xi Xoe</span>
                <div className="info">
                  <div className="item">
                    <PlaceIcon />
                    <span>{data.city}</span>
                  </div>
                  <div className="item">
                    <LanguageIcon />
                    <span>{data.website}</span>
                  </div>
                </div>
                {userId === currentUser.id ? (<button>Update</button>) : <button>Follow</button>}
              </div>

              {/* Email & More Icons */}
              <div className="right">
                <EmailOutlinedIcon />
                <MoreVertIcon />
              </div>
            </div>
            <Posts />
          </div>
        </>
      )}
    </div>
  );
};

export default Profile