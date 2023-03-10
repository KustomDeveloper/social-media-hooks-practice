import React, { useState, useEffect, createContext, useContext, useReducer } from 'react';
import Login from './components/Login'
import Header from './components/Header'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import postReducer from './reducers/PostReducer'

import './App.css';

export const SettingsContext = createContext({
  color: 'red',
});
export const UserContext = createContext("");
export const PostContext = createContext({
  posts: []
});

function App() {
  const settings = useContext(SettingsContext);
  const initialPostState = useContext(PostContext);

  const [state, dispatch] = useReducer(postReducer, initialPostState);
  const [user, setUser] = useState('Mike')

  useEffect(() => {
    document.title = user ? `${user}'s feed` : 'Please Login'
  }, [user])

  if(!user) {
    return <Login setUser={setUser} />
  }

  return(
    <PostContext.Provider value={{ state, dispatch }}>
      <UserContext.Provider value={user}>
        <SettingsContext.Provider value={settings}>
          <Header user={user} setUser={setUser} />
          <CreatePost user={user} />
          <PostList posts={state.posts} />
        </SettingsContext.Provider>
      </UserContext.Provider>
    </PostContext.Provider>
  )

}

export default App;
