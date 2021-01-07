import React, { Fragment, useState } from "react";
import Logoipsum from "../img/logo.svg";
import API from "../utils/API";

const Auth = () => {
  const [register, setRegister] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //API Calls
  const signupUser = async (email, password) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const body = { email, password };
      const res = await API.post("api/v1/auth/signup", body, config);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    signupUser(email, password);
    console.log("Button Clicked!!!");
  };

  const buttonText = register ? "SignUp" : "Login";

  //Classes
  const registerClass = !register
    ? "form-switcher__option"
    : "form-switcher__option--selected";
  const loginClass = register
    ? "form-switcher__option"
    : "form-switcher__option--selected";
  return (
    <Fragment>
      <div className="form-switcher">
        <div className={loginClass} onClick={(e) => setRegister(false)}>
          Login
        </div>
        <div className={registerClass} onClick={(e) => setRegister(true)}>
          Signup
        </div>
      </div>
      <div className="login-form">
        <form className="login-form__group" onSubmit={(e) => onSubmit(e)}>
          <img className="login-form__logo" src={Logoipsum} alt="Logoipsum" />
          <input
            className="input__text"
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
          <input
            className="input__text"
            type="password"
            placeholder="Password"
            name="password"
            minLength="5"
            value={password}
            onChange={(e) => onChange(e)}
            required
          />
          <input className="input__submit" type="submit" value={buttonText} />
        </form>
      </div>
    </Fragment>
  );
};
export default Auth;
