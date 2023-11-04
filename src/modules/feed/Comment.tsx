import React from "react";
import { CommentProps } from "./types";

const Comment = ({ name, text, id }: CommentProps) => {
  return (
    <article className="chat chat-start">
      <div className="chat-header">{name}</div>
      <div className="chat-bubble">{text}</div>
    </article>
  );
};

export default Comment;
