import React from 'react';
//css
import './css/Password.css';

//logo
import logo from '../assets/logos/logo_yard_sale.svg';

//Components
import PrimaryButton from '../components/PrimaryButton';

const Password = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src={logo} alt="" className="logo" />

        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for your account</p>

        <form action="/" className="form">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input type="password" name="" id="password" placeholder="Password" className="input input-password" />
          <label htmlFor="re-password" className="label">
            Re-enter password
          </label>
          <input type="password" name="" id="re-password" placeholder="Password" className="input input-password" />
          <PrimaryButton value="Confirm" />
        </form>
      </div>
    </div>
  );
};

export default Password;
