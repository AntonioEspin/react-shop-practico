import React from "react";
import '../styles/EditAccount.scss';

const EditAccount = () => {
  return (
    <section className="login">
      <div className="form-container">
        <h1 className="title">My account</h1>
        <form action="/" className="form">
          <div>
            <label for="name" className="label">Name</label>
            <p className="value">Antonio Espin</p>

            <label for="email" className="label">Email</label>
            <p className="value">youremail@example.com</p>

            <label for="password" className="label">Password</label>
            <p className="value">*******</p>
          </div>

          <input type="submit" className="secondary-button login-button" value="Edit"/>
        </form>
      </div>
    </section>
  )
}

export default EditAccount;