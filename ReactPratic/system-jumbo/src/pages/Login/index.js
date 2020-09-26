import React from "react";

import "./styles.css";

import uxImg from "../../assets/ux.svg";

function Login() {
  return (
    <div id="container">
      <section className="content-text">
        <h1>Login</h1>

        <form className="card-content">
          <div className="item-email">
            <h4>Email</h4>
            <input type="email" name="email" />
          </div>

          <div className="item-password">
            <h4>Password</h4>
            <input type="password" name="password" />
          </div>

          <button type="submit">SIGN IN</button>
          <a href="#">Create an account</a>
        </form>
      </section>
      <section className="content-img">
        <img src={uxImg} alt="UX" />
      </section>
    </div>
  );
}

export default Login;
