import React, { useState, useEffect, useRef } from 'react';


function Login({ setUser }) {
  const [username, setUsername] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    setUser(username)

  }

    return(
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input onChange={(e) => setUsername(e.target.value)} placeholder="Input Username" />
            <button type="submit">Submit</button>
        </form>
      </div>

    )
}


export default Login;