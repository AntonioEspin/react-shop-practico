import React from "react";
import '../styles/CreateAccount.scss';

const CreateAccount = () => {
  return (
    <section className="login">
      <div className="form-container">
        <h1 className="title">My account</h1>
        <form action="/" className="form">
          <div>
            <label for="name" className="label">Name</label>
            <input type="text" className="input input-name" id="name" placeholder="Antonio"/>
    
            <label for="email" className="label">Email</label>
            <input type="email" className="input input-email" id="name" placeholder="youremail@example.com"/>
    
            <label for="password" className="label">Password</label>
            <input type="password" className="input input-password" id="password" placeholder="********"/>
          </div>

          <input type="submit" className="primary-button login-button" value="Create"/>
        </form>
      </div>
    </section>
  );
};

export default CreateAccount;