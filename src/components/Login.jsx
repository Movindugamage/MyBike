import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <br/>
      
      <form>
        <label>
          Username: 
          <input type="text" name="username" />
        </label>
        <label>
          <br></br>
          Password: 
          <input type="password" name="password" />
        </label>
        <br></br>
        <button type="submit">Login</button>
      </form>
      <br></br>
      <a href="#">Forgot Password?</a>
    </div>
  );
};

export default Login;
