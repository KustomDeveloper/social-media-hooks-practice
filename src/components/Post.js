import React, { useState, useContext } from 'react';
import { SettingsContext, UserContext, PostContext } from '../App';

function Post({ image, content, user, id }) {
  const settings = useContext(SettingsContext);
  const currentUser = useContext(UserContext);
  const { dispatch } = useContext(PostContext);
  const isCurrentUser = currentUser === user;

  const handleDeletePost = () => {
    dispatch({ type: "DELETE_POST", payload: {id} });
  }

    return(
        <div className="post-item">
          {image && (
            <img style={{ height: 100, width: 200, objectFit: 'cover' }} src={URL.createObjectURL(image)} alt="post cover"/>
          )}
          <p style={{color: settings.color}}>{content}</p>
          <div><small>Posted By: {user}</small></div>
          {isCurrentUser && <button onClick={handleDeletePost}>Delete</button>}
        </div>
    )
}


export default Post;