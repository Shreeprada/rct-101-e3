import React from "react";
import { Products } from "../components/Products";
import RequiredAuth from "../hoc/RequiredAuth";
const Home = () => {
  return <div>
    <Products/>
  </div>;
};

export default Home;
