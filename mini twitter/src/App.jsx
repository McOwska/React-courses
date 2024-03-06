import Post from "./components/Post/Post";
import PostsList from "./components/PostList/PostsList";
import { PostInstance } from "./components/Post/Post";
import styles from "./App.modules.css";
import NewPost from "./components/NewPost/NewPost";
import React, { useState } from "react";
import ModalOverlay from "./components/ModalOverlay/ModalOverlay";
import Header from "./components/Header/Header";

const App = () => {
  const [posts, setPosts] = useState([]);

  const [newPost, setNewPost] = useState(new PostInstance('', ''));
  const [addNewPostActive, setAddNewPostActive] = useState(false);

	function onClickHandler(event) {
		const author = document.getElementById("author").value;
    const body = document.getElementById("body").value;

    setPosts([new PostInstance(author, body), ...posts]);
    setAddNewPostActive(false);
	}

  function addNewPostHandler(event) {
    setAddNewPostActive(true);
  }

  function onCloseHandler(event) {
    setAddNewPostActive(false);
  }

  function deletePostHandler(id) {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  }

  return (
    <>
    <Header onClick={addNewPostHandler}/>
    {addNewPostActive && <ModalOverlay><NewPost onClick={onClickHandler} onClose={onCloseHandler}/> </ModalOverlay> }
    <div className="centered-container">
      <PostsList posts={posts} onClick={deletePostHandler}/>
    </div>
    </>
  );
};

export default App;
