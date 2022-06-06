import React,{useContext} from "react";
import {useNavigate} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const RequiredAuth = ({ children }) => {
  const navigate=useNavigate();
  const {isAuth}=useContext(AuthContext);
  if(isAuth){
    return children;
  }
  else{
      return navigate("/login");
  }
  
};

export default RequiredAuth;
