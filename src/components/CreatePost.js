import React, { useState, useRef, useContext } from 'react';
import { PostContext } from '../App';
import uuid from 'react-uuid';

function CreatePost({ user }) {
  const { dispatch } = useContext(PostContext);
   const [content, setContent] = useState('');
   const [image, setImage] = useState(null);
   const imageInputRef = useRef();

   function handleSubmit(e) {
    e.preventDefault();
    const post = { content, image, user, id: uuid() }
    dispatch({ type: "ADD_POST", payload: { post } }) 
    setContent("");
    imageInputRef.current.value = "";
   }

    return(
        <div>
          <h1>Create New Post</h1>
          <form onSubmit={e => handleSubmit(e)}>
            <input type="text" 
              placeholder="Add Post Content"
              onChange={e => setContent(e.target.value)}
              value={content}
            />
            <input type="file"
              ref={imageInputRef}
              onChange={e => setImage(e.target.files[0])}
            />
            <button type="submit">Submit Post</button>
          </form>
        </div>
      )
}

export default CreatePost;