import React from "react";
import "./Login.css";
import {
  Envelope,
  Lock,
  ArrowRight,
  Google,
  Facebook,
} from "@styled-icons/bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="login_container app_container">
        <h1>
          <span className="global_span1">Login</span> to Your Account
        </h1>
        <p>Login to your account with your email and password</p>
        <div className="login-cont_form">
          <div className="login-form_method1">
            <div className="login-form_div">
              <input type="email" placeholder="Email" autoFocus />
              <Envelope />
            </div>
            <div className="login-form_div">
              <input type="password" placeholder="Password" />
              <Lock />
            </div>
            <div className="login-form_div">
              <button>Login In</button>
              <ArrowRight className="login-form_submitIcon" />
            </div>
          </div>
          <div className="login-form_method2">
            <div className="login-form_div inverted">
              <Google />
              <input type="text" disabled placeholder="Sign in with Google" />
            </div>
            <div className="login-form_div inverted">
              <Facebook />
              <input type="text" disabled placeholder="Sign in with Facebook" />
            </div>
          </div>
        </div>
        <p>
          <Link to="/register">Don't have an account?</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
