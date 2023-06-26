import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const ItemDescription = ({ addToCart }) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setItem(data);
    } catch (error) {
      console.log("Error fetching item:", error);
    }
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>
        <b className="text-red-500 flex justify-center items-center mt-10">
          Item Description
        </b>
      </h1>
      <br />
      <h2 className="flex justify-center items-center">{item.title}</h2>
      <br />
      <p className="ml-10">{item.description}</p>
      <img
        className="w-[300px] flex justify-center items-center my-10 pl-20  "
        src={item.image}
        alt={item.title}
      />
      <button
        onClick={(e) => {
          e.preventDefault();

          addToCart(item);
        }}
      >
        <div className=" relative top-0 flex justify-center items-center text-white bg-red-500 w-[300px] h-15 rounded-lg">
          {/* <BsPlus size={20} className=" h-12 w-20 " /> */}
          Add to cart
        </div>
      </button>
    </div>
  );
};

export default ItemDescription;
