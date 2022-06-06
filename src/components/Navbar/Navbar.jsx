import React from "react";
import {Link,useNavigate} from "react-router-dom";
import {useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import RequiredAuth from "../../hoc/RequiredAuth";
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const {isAuth,logout} =useContext(AuthContext);
  const navigate=useNavigate();
  const handleLogin=()=>{
    if(isAuth){
      logout();
      navigate("/login");

    }
    else{
      navigate("/login");
    }
  }
  return (
    <div data-cy="navbar" style={{display:"flex",justifyContent:"space-around"}}>
      
      <Link data-cy="navbar-home-link" to="/">Home</Link>
      <span data-cy="navbar-cart-items-count">Cart:{/* count here */}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleLogin}>{isAuth ? "Logout":"Login"}</button>
    </div>
  );
};

export default Navbar;
