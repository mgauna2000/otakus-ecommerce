import React from "react";
import CartContext from '../../context/CardContext'
import { useContext } from "react";
import swal from 'sweetalert';
import Icon from "./icon.jpg"
import "../ItemCount/ItemCount.css"

const ItemCount = ({amount, updateAmount, stock, setShowButton, data}) => {

  const { id, image, title, desc, price } = data

  const { addProductToCartAmount } = useContext(CartContext)

  const imgUrl = Icon

    const addCount = () => {
        if(amount < stock) {
            updateAmount(amount + 1)
        }
    }

    const removeCount = () => {
        if(amount > 1) {
            updateAmount(amount - 1)
        }
    }
    const addCart = () => {
      setShowButton(true)
      addProductToCartAmount({ id, image, title, desc, price, amount })
      swal({
        title: "Se agrego al carrito!",
        text: "Arigato!",
        icon: imgUrl,
        button: false,
        timerProgressBar: true,
        timer: 1500
      })
    }

  return (
    <>
      <div className="container m-1">
        <div className="row align-items">
          <div className="col-5">
            <button className="btn btn-primary" onClick={removeCount}>-</button>
          </div>
          <div className="col-2 mt-3">
            <h1 className="text-center">{amount}</h1>
          </div>
          <div className="col-5">
            <button className="btn btn-primary" onClick={addCount}>+</button>
          </div>
        </div>
        <button
              type="button"
              onClick={addCart}
              className="btn btn-dark btn-add"
            >
              Agregar al carrito
            </button>
      </div>
    </>
  );
};

export default ItemCount;
