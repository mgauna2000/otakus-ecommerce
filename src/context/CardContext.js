import React from "react";
import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartListAmount, setCartListAmount] = useState([]);
  const [totalPriceAmount, setTotalPriceAmount] = useState(0);

  const addProductToCartAmount = (product) => {
    console.log("se agrego el producto: ", product);
    let isInCart = cartListAmount.find((cartItem) => cartItem.id == product.id);
    if (!isInCart) {
      setTotalPriceAmount(totalPriceAmount + product.price * product.amount);
      return setCartListAmount((cartListItems) => [...cartListItems, product]);
    }
  };

  const cleanCartProducts = () => {
    setCartListAmount([]);
    setTotalPriceAmount(0);
  };

  const removeProduct = (id, price, amount) => {
    const copyCartListItems = [...cartListAmount];
    let index = copyCartListItems.findIndex((product) => product.id === id);
    copyCartListItems.splice(index, 1);
    setCartListAmount([...copyCartListItems]);
    setTotalPriceAmount(totalPriceAmount - price * amount);
    console.log(price, amount);
  };

  const data = {
    cartListAmount,
    totalPriceAmount,
    cleanCartProducts,
    removeProduct,
    addProductToCartAmount,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;
export { CartProvider };
