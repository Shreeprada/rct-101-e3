import React,{useEffect,useState} from "react";
import axios from "axios";
import {Product} from "./Product";
const Products = () => {
  const [data,setData]=useState([]);
  const [cart,setCart]=useState([]);
  useEffect(()=>{
    const getdata=()=>{
axios.get(` http://localhost:8080/products`)
    .then((r)=>setData(r.data))
  };
  getdata();
  const getcart=()=>{
    axios.get(`http://localhost:8080/cartItems`)
    .then((r)=>setCart(r.data))
  };
  getcart();
},[]);
const handleAdd=(id)=>{
  const newcart=cart.filter(()=>id===cart.productId);
  setCart([...cart,newcart]);
};
  return (
  <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"20px"}}>
    {data.map((item)=>(
      <div style={{border:"1px solid black",borderRadius:"10px"}}>
        <Product item={item} cart={cart} handleAdd={handleAdd}/>
        </div>
    ))}
  </div>
  );
};

export default Products;
