import React from 'react'
import { createContext, useState } from 'react'

const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cartListItems, setCartListItems] = useState([])
    const [cartListAmount, setCartListAmount] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalPriceAmount, setTotalPriceAmount] = useState(0)

    const addProductToCart = (product) => {
      console.log("se agrego el producto: ", product)
      let isInCart = cartListItems.find(cartItem => cartItem.id == product.id)
      if(!isInCart) {
        setTotalPrice(totalPrice + product.price)
        // setTotalPrice(totalPrice + product.price * product.amount)
       return setCartListItems(cartListItems => [...cartListItems, product])
      }
    }
    const addProductToCartAmount = (product) => {
      console.log("se agrego el producto: ", product)
      let isInCart = cartListAmount.find(cartItem => cartItem.id == product.id)
      if(!isInCart) {
        setTotalPriceAmount(totalPriceAmount + product.price * product.amount)
        // setTotalPrice(totalPrice + product.price * product.amount)
       return setCartListAmount(cartListItems => [...cartListItems, product])
      }
    }

    const cleanCartProducts = () => {
      setCartListAmount([])
      setTotalPriceAmount(0)
    }

    const removeProduct = (id, price, amount) => {
      const copyCartListItems = [...cartListAmount]
      let index = copyCartListItems.findIndex((product) => product.id === id)
      copyCartListItems.splice(index, 1)
      setCartListAmount([...copyCartListItems])
      setTotalPriceAmount(totalPriceAmount - price * amount)
      console.log(price, amount)
      // const newCartListItems = copyCartListItems.filter(cartListItems => cartListItems.id !== id)
      // console.log("items remove", copyCartListItems[0].price)
      // setCartListAmount(newCartListItems)
      // console.log(totalPrice)
    }

    const data = {
        cartListItems,
        cartListAmount,
        totalPrice,
        totalPriceAmount,
        cleanCartProducts,
        removeProduct,
        addProductToCart,
        addProductToCartAmount
    }

  return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext
export { CartProvider }