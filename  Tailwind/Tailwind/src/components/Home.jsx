import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import Cart from "./Cart";

import { BsPlus } from "react-icons/bs";

const Home = ({ addToCart }) => {
  const [items, setItems] = useState([]);

  // const [cartItems, setCartItems] = useState([]);
  // const { addToCart } = useContext(Cart);
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=8",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.log("Error fetching items:", error);
    }
  };
  // const Home = (item) => {
  //   const updatedCartItems = [...cartItems, item];
  //   setCartItems(updatedCartItems);
  // };
  return (
    <div>
      <h1>
        <b className="flex justify-center items-center text-3xl mt-10">
          {" "}
          Home Page
        </b>
      </h1>
      <br />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  ml-10 ">
        {items.map((item) => {
          const { id, image, title, description, product, price } = item;
          return (
            <Link to={`/item/${id}`} key={item.id}>
              <div>
                <br />
                <div className="border border-[white]h-[300px] w-[320px] mr-10 mb-4 relative overflow-hidden group transition shadow-2xl rounded-lg">
                  <div className="w-full h-full flex justify-center items-center">
                    <div className="bg-white height-[300]" key={item.id}>
                      {/* <div className="absolute top-0 right-o bg-blue-200 p-2"></div> */}

                      <br />

                      <br />

                      <img
                        className="h-[300px]   w-[250px] flex justify-center items-center mb-20  ml-10 group-hover:scale-110"
                        src={image}
                      />
                      <h2 className="h-14 ml-10">{title}</h2>
                      <h3 className="flex justify-center items-center">
                        price:${price}
                      </h3>
                      <br />
                      <p>{product}</p>
                      <button
                        onClick={(e) => {
                          e.preventDefault();

                          addToCart(item);
                          alert("Item added to cart!!!");
                        }}
                      >
                        <div className=" relative top-0 flex justify-center items-center text- bg-green-100 w-[310px] h-15 rounded-lg">
                          <BsPlus size={15} className=" h-10 w-20 " />
                          Add to cart
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
