import React, { useState } from "react";
import { PostCont } from "../styles/Style";
import Comment from "./Comment";
import { post } from "./PostData";
import { FaHeart } from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { IoIosShareAlt } from "react-icons/io";

const Post = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {post.map((el) => (
        <PostCont>
          <div className="post_img">
            <img src={el.image} alt="" />
          </div>
          <div className="post_details">
            <div className="user_details">
              <div className="user_img">
                <img src={el.userimg} alt="" />
              </div>
              <div className="user_cred">
                <h1 className="name">{el.username}</h1>
                <div className="flex">
                  <span>{el.location}</span>
                  <span>{el.time}</span>
                  <span>{el.likes}</span>
                  <span>{el.replies}</span>
                </div>
                <div className="btn" onClick={handleClick}>
                  <div></div>
                  <div></div>
                  <div></div>
                  </div>
              </div>
            </div>
            <p>{el.text}</p>
            <Comment />
            <div className="icons">
              <ul className="marking">
                <li>
                  <FaHeart className="heart" />
                </li>
                <li>
                  <BsChat />
                </li>
                <li>
                  <BsBookmark />
                </li>
              </ul>
              <IoIosShareAlt />
            </div>
          </div>
        </PostCont>
      ))}
    </>
  );
};

export default Post;
