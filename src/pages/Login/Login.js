
import React, { useState } from "react";
import CustomInput from "../../Atom/Input/CustomInput";

import "./Login.css";
import axios from "axios";
import { LoginAtom } from "../../RecoilAtom/Atoms";
import { Button } from "@mui/material";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginAtom);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post("https://booking-bus.glitch.me/login", data);
      localStorage.setItem("token", response.data.token); // set the token
      setIsLoggedIn(true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        variant="contained"
        type="submit"
        onClick={handleSubmit}
        style={{ width: "100%" }}
        className="bg-danger mt-3"
      >
        Log in
      </Button>
    </div>
  );
}

export default Login;

