import React, { useState } from "react";
import "../App.css";

const Book = ({ book }) => {
  const [count, setCount] = useState(0);

  function decrementCount() {
    if (count > 0) setCount(count - 1);
  }

  function incrementCount() {
    setCount(count + 1);
  }

  function handleButton() {
    alert("Book added to cart successfully!");
  }

  return (
    <div className="card">
      <img src={book.image} width="200" height="200" alt="Book" />
      <h3>Title: {book.title}</h3>
      <h4>Price: ₹{book.price}</h4>

      <div>
        <button onClick={decrementCount}>-</button>
        <span style={{ margin: "0 10px" }}>{count}</span>
        <button onClick={incrementCount}>+</button>
      </div>

      <button onClick={handleButton}>Add To Cart</button>
    </div>
  );
};

export default Book;
