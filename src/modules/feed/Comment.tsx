import React from "react";
import { CommentProps } from "./types";

const Comment = ({ name, text, id }: CommentProps) => {
  return (
    <article className="chat chat-start flex flex-col gap-2 py-2">
      <div className="chat-header font-semibold">{name}</div>
      <div className="chat-bubble">{text}</div>
    </article>
  );
};

export default Comment;
