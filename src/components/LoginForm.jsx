import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [Registering, setRegistering] = useState(false);

  const handleLogin = () => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
      setLoggedIn(true);
      alert('Login succeed')
    } else {
      alert('Login failed')
    }
  };

  const handleRegister = () => {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Register succeed')
    setRegistering(false);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  if (loggedIn) {
    return (
      <div className="App">
        <h1>Welcome!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }


  return (
    <div className="App">
      <h1>{Registering ? 'Đăng ký' : 'Đăng nhập'}</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {Registering ? (
        <button onClick={handleRegister}>Register</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
      <p>
        {Registering
          ? 'Already have an account?'
          : 'Not have an account yet?'}
        <button onClick={() => setRegistering(!Registering)}>
          {Registering ? 'Login' : 'Register'}
        </button>
      </p>
    </div>
  );
}

export default LoginForm;
