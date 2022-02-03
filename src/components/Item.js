import React, { useState } from "react";






function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  function handleClick1() {
    setInCart(inCart => !inCart)  
  }
  const toggleCart = inCart ? "in-cart" : ""
  const toggleText = inCart ? "remove from cart" : "Add to Cart"
  const toggleClass = inCart ? "remove" : "add"
  return (
    <li className={toggleCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick1} className={toggleClass}>{toggleText}</button>
    </li>
  );
}

export default Item;
