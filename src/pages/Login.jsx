import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
const Login = () => {
  const navigate=useNavigate();
  const {login} =useContext(AuthContext);
  const handleLogin=()=>{
      login();
  }
  return (
    <div>
      <input data-cy="login-email" />
      <input data-cy="login-password" />
      <button data-cy="login-submit" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
