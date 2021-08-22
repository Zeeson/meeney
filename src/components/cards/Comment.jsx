import React from 'react'
import { CommentCont } from '../styles/Style'
import user2 from "../../assets/images/user2.png";

const Comment = () => {
    return (
      <CommentCont>
        <small className="view_more">View all comments</small>
        <div className="commentbox">
          <div className="user_img">
            <img src={user2} alt="" />
          </div>
          <div className="details">
            <h5 className="name">Rose Kooto</h5>
            <span className="time">Last Seen 11hr</span>
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the
            </p>
          </div>
        </div>
      </CommentCont>
    );
}

export default Comment
