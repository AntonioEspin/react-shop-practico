import React from "react";
import '../styles/NewPassword.scss'

const NewPassword = () => {
  return (
    <section className="newPassword">
      <div className="form-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for your account</p>
        <form action="/" className="form">
          <label for="password" className="label">Password</label>
          <input type="password" className="input input-password" id="password" placeholder="********"/>

          <label for="re-password" className="label">Re-enter password</label>
          <input type="password" className="input input-password" id="re-password" placeholder="********"/>

          <input type="submit" className="primary-button login-button" value="Confirm new password"/>
        </form>
      </div>
    </section>
  );
};

export default NewPassword;