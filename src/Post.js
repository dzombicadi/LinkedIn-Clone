import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import "./Post.css";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import InputOption from "./InputOption";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

// ref - reference | animations need reference which object they will animate, that's why we use reference | https://reactjs.org/docs/refs-and-the-dom.html
// React Flip Move requires to make from function to arrow function (const)
// Pretty cool thing when posting comments or loading them
const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    // React Flip Move
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>
          {name[0]}
          {/* this will show up, between these two Avatar tags if something go wrong (if there's no source to get picture from, that is if picture doesn't exist in database) */}
        </Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
