import React from "react";
import "./Signin.css";
export default function SignIn() {
  return (
    <div className="formBody">
          <div class="form">
      <div class="title">Welcome</div>
      <div class="subtitle">Sign in</div>
      <div class="input-container ic1">
        {/* <input id="firstname" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="firstname" class="placeholder">First name</label> */}
      </div>
      <div class="input-container ic2">
        <input id="password" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="password" class="placeholder">password</label>
      </div>
      <div class="input-container ic2">
        <input id="email" class="input" type="text" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Email</label>
      </div>
      <button type="text" class="submit">submit</button>
    </div>
    </div>
  );
}
