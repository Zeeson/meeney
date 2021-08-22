import React from "react";
import { FaImage, FaVideo } from "react-icons/fa";
import { TiLocation, TiTag } from "react-icons/ti";
import { CreatePostConst } from "../styles/Style";

const CreatePost = () => {
  return (
    <CreatePostConst>
      <form action="">
        <input type="text" placeholder="Share your Moments" />
        <button>Post</button>
      </form>
      <ul className="attatchments">
        <li>
          <FaImage className="icon" />
          Image
        </li>
        <li>
          <FaVideo className="icon" />
          Video
        </li>
        <li>
          <TiLocation className="icon" />
          Location
        </li>
        <li>
          <TiTag className="icon" />
          Tags
        </li>
      </ul>
    </CreatePostConst>
  );
};

export default CreatePost;
