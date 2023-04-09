import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Toast from "react-bootstrap/Toast";
import CustomInput from "../../Atom/Input/CustomInput";
import CustomButton from "../../Atom/Button/CustomButton";
import { Button } from "@mui/material";

import {
  isValidEmail,
  isValidPassword,
  isValidName,
  isValidphone,
} from "../../Helper/helper";
import "./Signup.css";

const Signup = () => {

  const [toast, setToast] = useState(false)
  const [firstName, setFirstName] = useState("");
  const [firstNameMessage, setFirstNameMessage] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameMessage, setLastNameMessage] = useState("");

  const [password, setPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");

  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");

  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const navigate = useNavigate();

  const HandleSubmit = (e) => {
    if (!isValidName(firstName)) {
      setFirstNameMessage("Enter Correct First Name");
      return;
    }

    if (!isValidName(lastName)) {
      setLastNameMessage("Enter Correct Last Name");
      return;
    }
    if (!isValidEmail(email)) {
      setEmailMessage("Enter Correct Email");
      return;
    }
    if (!isValidPassword(password)) {
      setPasswordMessage("Enter Correct Password");
      return;
    }
    if (!isValidphone(phone)) {
      setPhoneMessage("Enter Valid Phone Number");
    }

    if (password !== confirmPassword) {
      setConfirmPasswordMessage("Enter Correct Password");
      return;
    }

    e.preventDefault();
    // TODO: send form data to backend
    if (password !== confirmPassword) {
      setConfirmPasswordMessage("Enter Correct Password");
      return;
    }


    setToast(true)
    let data = {
      firstName,
      lastName,
      email,
      password,
      phone,
      dob,
      gender,
    };
    axios
      .post("http://localhost:5000/createUser", data)
      .then(() => {
        navigate("/login");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <div className="Main">
      <h1>Sign Up</h1>

      <form onSubmit={HandleSubmit}>
        <CustomInput
          placeholder="Enter First Name"
          value={firstName}
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        {!isValidName(firstName) ? (
          <span style={{ color: "red", height: ".3rem" }}>
            {firstNameMessage}
          </span>
        ) : (
          <span></span>
        )}

        <CustomInput
          placeholder="Enter Last Name"
          value={lastName}
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        {!isValidName(lastName) ? (
          <span style={{ color: "red", height: ".3rem" }}>
            {lastNameMessage}
          </span>
        ) : (
          <span></span>
        )}

        <CustomInput
          placeholder="Enter Phone"
          value={phone}
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        {!isValidphone(phone) ? (
          <span style={{ color: "red", height: ".3rem" }}>{phoneMessage}</span>
        ) : (
          <span></span>
        )}

        <CustomInput
          placeholder="Enter Email"
          value={email}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {!isValidEmail(email) ? (
          <span style={{ color: "red", height: ".3rem" }}>{emailMessage}</span>
        ) : (
          <span></span>
        )}

        <CustomInput
          placeholder="Enter Password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {!isValidPassword(password) ? (
          <span style={{ color: "red", height: ".3rem" }}>
            {passwordMessage}
          </span>
        ) : (
          <span></span>
        )}
        <CustomInput
          placeholder="Confirm Password"
          value={confirmPassword}
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {password !== confirmPassword ? (
          <span style={{ color: "red", height: ".3rem" }}>
            {confirmPasswordMessage}
          </span>
        ) : (
          <span></span>
        )}

        <select
          className="gender form-control"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <CustomInput
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          placeholder='Date'
        />


<Button variant="contained" type="submit" style={{width:'100%'}} className="bg-danger mt-3" >Register</Button>
        {/* <CustomButton type="submit" text="Register" className="btn btn-danger" /> */}
        <Link to="/login" ><h6 className="mt-3">Already Register ? Login</h6></Link>
      </form>
      {toast ? <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast> : null}
    </div>
  );
};

export default Signup;