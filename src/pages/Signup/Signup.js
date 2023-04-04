import React, { useState } from "react";
import CustomInput from "../../Atom/Input/CustomInput";
import CustomButton from "../../Atom/Button/CustomButton";
import axios from 'axios'
import {
  isValidEmail,
  isValidPassword,
  isValidName,
} from "../../Helper/helper";
import "./Signup.css";
function Signup() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [lastNameMessage, setLastNameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const[emailMessage,setEmailMessage]=useState("")
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");
  const [email,setEmail]=useState("")

  function HandleSubmit() {
    if (!isValidName(name)) {
      setNameMessage("Enter Correct First Name");
      return;
    }
    if (!isValidName(lastName)) {
      setLastNameMessage("Enter Correct Last Name")
      return
    }
    if (!isValidEmail(email)) {
        setEmailMessage("Enter Correct Email");
        return
      }
      if (!isValidPassword(password)) {
        setPasswordMessage("Enter Correct Password");
        return
      }
    if (password !== confirmPassword) {
      setConfirmPasswordMessage("Enter Correct Password");
      return
    }
    let data={
        name,lastName,email,password
    }
    axios.post("http://localhost:5000/createUser",data).catch(()=>{alert("unknown error")})
  }
  return (
    <div className="Main">
      <h1>Sign Up Page</h1>
      <CustomInput
        placeholder="Enter Name"
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
        required 
      />
      
      {!isValidName(lastName) ? (
        <span style={{ color: "red", height: ".3rem" }}>{nameMessage}</span>
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
        <span style={{ color: "red", height: ".3rem" }}>{lastNameMessage}</span>
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
        <span style={{ color: "red", height: ".3rem" }}>{passwordMessage}</span>
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
      <CustomButton text="Sign Up" onClick={HandleSubmit} />
    </div>
  );
}

export default Signup;
