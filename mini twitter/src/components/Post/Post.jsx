import React from "react";
import styles from './Post.module.css';
import {AiOutlineCloseCircle} from 'react-icons/ai';

export class PostInstance {
  constructor(author, body) {
    this.author = author;
    this.body = body;
    this.id = Math.random().toString(36).substr(2, 9);
  }
}

const Post = (props) => {
  function onClickHandler(event) {
    props.onClick(props.post.id);
    console.log(props.post.id)
  }

  return (
    <div className={styles.post}>
      <AiOutlineCloseCircle className={styles.close} onClick={onClickHandler}/>
      <p className={styles.author}>{props.post.author}</p>
      <p className={styles.text}>{props.post.body}</p>
    </div>
  );
};

export default Post;
