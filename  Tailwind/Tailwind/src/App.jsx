import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
// import Login from "./components/Login";
import Products from "./components/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDescription from "./components/ItemDescription";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find(
      (cartItems) => cartItems.id === item.id
    );
    if (existingItem) {
      existingItem.quantity += 1;
      // setCartItems([...cartItems]);
      alert(
        `Item "${item.title}" added ${existingItem.quantity}X to the cart.`
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      // alert(`Item "${item.title}" added to the cart.`);
    }
    // setCartItems((prev) => [...prev, item]);
  };

  const removeItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);

    setCartItems(updatedCartItems);
  };
  return (
    <>
      <BrowserRouter>
        <div className="bg-white w-full h-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route
              path="/cart"
              element={<Cart cartItems={cartItems} removeItem={removeItem} />}
            />
            <Route
              path="/item/:id"
              element={<ItemDescription addToCart={addToCart} />}
            />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/cart" element={<Cart cartItems={cartItems} />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
