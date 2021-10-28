import React, { useState } from "react";
import "./Register.css";
import register_photo from "../assets/register_photo.png";
import {
  Person,
  PersonCheck,
  ArrowRight,
  Envelope,
  Lock,
} from "@styled-icons/bootstrap";
import { Link } from "react-router-dom";
import secrets from "../secrets.json";
import CryptoJS from "crypto-js";
import custom_anime from "../assets/custom_anime.png";

const RegisterForm1 = ({
  name,
  setName,
  userName,
  setUserName,
  formHideShow,
}) => {
  return (
    <div className="register-cont_form" id="register_form1">
      <div className="register-form_div">
        <img src={custom_anime} alt="" />
        <input
          type="text"
          placeholder="Name"
          autoFocus
          value={name}
          onInput={(e) => setName(e.target.value)}
        />
        <Person />
      </div>
      <div
        className="register-form_div"
        title={`UserName will be created as "@${userName}"`}
      >
        <img src={custom_anime} alt="" />
        <input
          type="text"
          placeholder="User Name"
          value={userName}
          onInput={(e) => setUserName(e.target.value)}
        />
        <PersonCheck />
      </div>
      <p className={!name || !userName ? "hidden_message" : "visible_message"}>
        That's All <span className="global_span1">We</span> Need!
      </p>
      <div
        className="register-form_div clickable"
        disabled={!name || !userName ? true : false}
        onClick={formHideShow}
      >
        <button>Let's Go!</button>
        <ArrowRight className="login-form_submitIcon" />
      </div>
    </div>
  );
};

const RegisterForm2 = ({ registerUser, adminId, setAdminId }) => {
  return (
    <div className="register-cont_form" id="register_form2">
      <div className="register-form_div">
        <input type="email" placeholder="Email" />
        <Envelope />
      </div>
      <div className="register-form_div">
        <input type="password" placeholder="Password" />
        <Lock />
      </div>
      <div className="register-form_div">
        <input
          type="password"
          placeholder="Admin ID"
          value={adminId}
          onInput={(e) => setAdminId(e.target.value)}
        />
      </div>
      <div className="register-form_div">
        <button onClick={registerUser}>Sign Up</button>
        <ArrowRight className="login-form_submitIcon" />
      </div>
    </div>
  );
};

const Register = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [adminId, setAdminId] = useState("");

  const formHideShow = () => {
    document.getElementById("register_form1").classList.add("hide_anime");
    document.getElementById("register_form2").classList.add("show_anime");
  };

  const registerUser = () => {
    const originalText = CryptoJS.AES.decrypt(
      secrets.secret_1,
      adminId
    ).toString(CryptoJS.enc.Utf8);
    if (originalText.length > 4) {
      localStorage.setItem("registered", true);
      window.dispatchEvent(new Event("storage")); //trigger storage event on App.js
    }
  };

  return (
    <div className="register">
      <div className="register_container app_container">
        <h1>
          <span>Register</span> to Fahmily
        </h1>
        <p>Register to Fahmily with your email and password</p>
        <div className="register-cont_div">
          <RegisterForm1
            name={name}
            setName={setName}
            userName={userName}
            setUserName={setUserName}
            formHideShow={formHideShow}
          />
          <RegisterForm2
            registerUser={registerUser}
            adminId={adminId}
            setAdminId={setAdminId}
          />
          <div className="register-cont_image">
            <img src={register_photo} alt="" />
          </div>
        </div>
        <p>
          <Link to="/login">Already Have an Account?</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
