import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login">
       <img src="/src/assets/splash-bg.jpg" alt="Splash Background" className="splash-bg" />
      <h1>Login</h1>
      <br/>
      
      <form>
        <label>
          Username: 
          <input type="text" name="username" required/>
        </label>
        <label>
          <br></br>
          Password: 
          <input type="password" name="password" required/>
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
