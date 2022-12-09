import './rightBar.scss'

const RightBar = () => {
  return (
    <div className='rightbar'>
      <div className="container">

        {/*---Friend Suggestions---*/}
        <div className="item">
          <span>Suggestions For You</span>

          {/*---Friend Suggestion 1---*/}
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          
          {/*---Friend Suggestion 2---*/}
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>

        {/*---Latest Activities---*/}
        <div className="item">
          <span>Latest Activities</span>

          {/*---Latest Activities 1--- */}
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <p>
                <span>Jane Doe</span> Posted
              </p>
            </div>
            <span>1min ago</span>
          </div>

          {/*---Latest Activities 2--- */}
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <p>
                <span>Jane Doe</span> Liked a post
              </p>
            </div>
            <span>1min ago</span>
          </div>

          {/*---Latest Activities 3--- */}
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <p>
                <span>Jane Doe</span> Liked a comment
              </p>
            </div>
            <span>1min ago</span>
          </div>

          {/*---Latest Activities 4--- */}
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <p>
                <span>Jane Doe</span> Shared a video
              </p>
            </div>
            <span>1min ago</span>
          </div>
        </div>

        {/* Online Friends */}
        <div className="item">
          <span>Online Friends</span>

          {/*---Online Friend 1--- */}
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="online" />
              <span>Jane Doe</span> 
            </div> 
          </div>

          {/*---Online Friend 2--- */}
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="online" />
              <span>Jane Doe</span> 
            </div> 
          </div>

          {/*---Online Friend 3--- */}
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="online" />
              <span>Jane Doe</span> 
            </div> 
          </div>

          {/*---Online Friend 4--- */}
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="online" />
              <span>Jane Doe</span> 
            </div> 
          </div>

          {/*---Online Friend 5--- */}
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="online" />
              <span>Jane Doe</span> 
            </div> 
          </div>

        </div>
      </div>
    </div>
  )
}

export default RightBar