import React from "react";
import { PostBoardCont } from "../styles/Style";
import CreatePost from "./CreatePost";
import user2 from "../../assets/images/user2.png";
import Post from "../cards/Post";

const PostBoard = () => {
  return (
    <PostBoardCont>
      <div className="tab">
        <div className="commmunity">Community</div>
        <div className="trending">See What's Trending</div>
        <div className="active">My page</div>
      </div>

      <div className="user_profile">
        <div className="user_image">
          <img src={user2} alt="" />
        </div>
        <div className="user_summary">
          <div className="user_name">
            <h2>Rose Kooto</h2>
            <span>User name</span>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type
          </p>
        </div>
        <div className="user_stats">
          <ul className="stats">
            <li>
              <h4>105</h4>
              <p>posts</p>
            </li>
            <li>
              <h4>7,080</h4>
              <p>Followers</p>
            </li>
            <li>
              <h4>1,500</h4>
              <p>Following</p>
            </li>
            <li>
              <h4>1,500</h4>
              <p>Supporting</p>
            </li>
          </ul>

          <button>Following</button>

          <ul className="page_listing">
            <li>other pages</li>
            <li>Business one</li>
            <li>Business one longer name</li>
            <li>Business one</li>
            <li>Business one</li>
            <li>Business one</li>
          </ul>
        </div>
      </div>

      <CreatePost />
      <Post/>
    </PostBoardCont>
  );
};

export default PostBoard;
