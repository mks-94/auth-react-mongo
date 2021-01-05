import React from "react";
import Logoipsum from "../img/logo.svg";

const Auth = () => {
  return (
    <div className="login-form">
      <form className="login-form__group">
        <img className="login-form__logo" src={Logoipsum} alt="Logoipsum" />
        <input
          className="input__text"
          type="email"
          placeholder="Email Address"
          name="email"
          required
        />
        <input
          className="input__text"
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <input className="input__submit" type="submit" value="Login" />
      </form>
    </div>
  );
};
export default Auth;
