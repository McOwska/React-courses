import React, { useState } from "react";
import styles from "./NewPost.module.css";
import Post from "../Post/Post";
import { PostInstance } from "../Post/Post";
import {AiOutlineCloseCircle, AiFillCheckCircle} from 'react-icons/ai';

const NewPost = (props) => {

	const handleClick = (event) => {
    event.preventDefault(); // Prevent the form from submitting
    const author = document.getElementById("author").value;
    const body = document.getElementById("body").value;

    // Call the onClick prop with the new post data
		if(author === '' || body === '') {return;}
    props.onClick(author, body);

		document.getElementById("author").value = "";
    document.getElementById("body").value = "";
  };

	const handleClose = (event) => {
		props.onClose();
	}

  return (
    <form className={styles.form}>
			<AiOutlineCloseCircle onClick={handleClose} className={styles.close}/>
			<p>
        <label htmlFor="author">Your name</label>
        <input type="text" id="author" required />
      </p>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          style={{ resize: "none" }}
        />
      </p>
			<AiFillCheckCircle onClick={handleClick} className={styles.submit}/>
    </form>
  );
};

export default NewPost;
