import React, { useState, useEffect } from "react";
import CustomInput from "../../Atom/Input/CustomInput";
import CustomButton from "../../Atom/Button/CustomButton";
import "./Login.css";
import axios from "axios";
import { LoginAtom } from "../../RecoilAtom/Atoms";
import { Button } from "@mui/material";
import { useRecoilState } from "recoil";
import {useNavigate} from "react-router-dom"
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginAtom);
 const tonav=useNavigate()
  let handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      email: email,
      password: password,
    };
    await axios.post("http://localhost:5000/login", data).then((response) => {
      console.log(response.data); // check the response data
      localStorage.setItem("token", response.data.token); // set the token
    });
    setIsLoggedIn(true);
    tonav("/")
  };
  return (
    <div className="login__form">
      <h1>login Page</h1>

      <CustomInput
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <CustomInput
        value={password}
        placeholder="Paswword"
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <CustomButton onClick={handleSubmit} text='submit'/> */}

      <Button
        variant="contained"
        type="submit"
        onClick={handleSubmit}
        style={{ width: "100%" }}
        className="bg-danger mt-3"
      >
        Submit
      </Button>
    </div>
  );
}

export default Login;
