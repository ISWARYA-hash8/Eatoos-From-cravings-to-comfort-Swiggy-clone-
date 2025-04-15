import React from "react";
import useGrocery from "../utils/useGrocery";

const GroceryList = () => {
  const { grocInfo, isLoading, error } = useGrocery();

  if (isLoading) return <p>Loading groceries...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="border border-black rounded-sm">
      <h2 className="text-center border border-spacing-4">Grocery Products</h2>
      <ul>
        {grocInfo.map((item) => (
          <li  className='flex flex-wrap' key={item.id}>
            <img className="text-center" src={item.image} alt={item.title} width="100" />
            <p><strong>{item.title}</strong></p>
            <p>₹{item.price}</p>
            <p>Brand: {item.brand}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
