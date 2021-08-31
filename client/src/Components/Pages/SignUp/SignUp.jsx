import React, { useState } from "react";
import "./SignUp.css";
import { login } from "../../Controllers/userController";
export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(fullName);
  // console.log(email);
  // console.log(password);
  async function send() {
    await login(fullName, email, password);
  }
  async function onSubmitHedler(e) {
    await e.preventDefault();

    const registered = {
      fullName,
      email,
      password,
    };

    fetch('http://localhost:8080/signup',registered);
  }
  return (
    <form action="" onSubmit={onSubmitHedler}>
      <div className="formBody">
        <div className="form">
          <div className="title">Welcome</div>
          <div className="subtitle">Let's create your account!</div>
          <div className="input-container ic1">
            <input
              onChange={(e) => {
                return setFullName(e.target.value);
              }}
              value={fullName}
              id="fullName"
              name="fullName"
              className="input"
              type="text"
              placeholder=" "
            />
            <div className="cut"></div>
            <label htmlFor="fullName" className="placeholder">
              Full name
            </label>
          </div>
          <div className="input-container ic2">
            <input
              onChange={(e) => {
                return setEmail(e.target.value);
              }}
              value={email}
              id="email"
              name="email"
              className="input"
              type="text"
              placeholder=" "
            />
            <div className="cut cut-short"></div>
            <label htmlFor="email" className="placeholder">
              Email
            </label>
          </div>
          <div className="input-container ic2">
            <input
              onChange={(e) => {
                return setPassword(e.target.value);
              }}
              value={password}
              id="password"
              name="password"
              className="input"
              type="text"
              placeholder=" "
            />
            <div className="cut"></div>
            <label htmlFor="password" className="placeholder">
              password
            </label>
          </div>
          <button
            type="submit"
            value="Submit"
            className="submit"
            onClick={send}
          >
            submit
          </button>
        </div>
      </div>
    </form>
  );
}
