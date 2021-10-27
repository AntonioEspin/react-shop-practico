import React from "react";
import '../styles/Login.scss';

const Login = () => {
  return (
    <section className="login">
      <div className="form-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>
        <form action="/" className="form">
          <label for="email" className="label">Email address</label>
          <input type="email" className="input input-email" id="email" placeholder="youremail@example.com"/>

          <label for="password" className="label">Password</label>
          <input type="password" className="input input-password" id="password" placeholder="********"/>

          <input type="submit" className="primary-button login-button" value="Log in"/>
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button singup-button">Sing up</button>
      </div>
    </section>
  )
}

export default Login;