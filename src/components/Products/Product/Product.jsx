import axios from "axios";
import React,{useEffect,useState} from "react";

const Product = ({item,cart,handleAdd}) => {
  console.log(cart);
  // Note: this id should come from api
  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{item.name}</h3>
      <h6 data-cy="product-description">{item.description}</h6>
      <button data-cy="product-add-item-to-cart-button" onClick={()=>handleAdd(item.id)}>Add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">
          {cart.count}
        </span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button">Remove</button>
      </div>
    </div>
  );
};

export default Product;
