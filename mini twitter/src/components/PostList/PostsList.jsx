import React from 'react';
import Post from '../Post/Post';
import styles from './PostsList.module.css';

const PostsList = (props) => {
  return (
    <ul className={styles.postsList}>
      {props.posts.map((post, index) => (<Post key={index} post={post} onClick={props.onClick}/>))}
    </ul>
  );

}

export default PostsList