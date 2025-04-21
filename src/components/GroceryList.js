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
          <li  className='flex flex-wrap px-4 py-4 m-2 border border-black' key={item.id}>
            <img className='border p-4 border-spacing-7 bg-slate-400' src={item.image} alt={item.title} width="100" />
            <p className="text-center"><strong>{item.title}</strong></p>
            <p>₹{item.price}</p>
            <p className="text-wrap">Brand: {item.brand}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
