import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import CartContext from '../../context/CardContext'
import { useContext } from "react";


const ItemDetail = ({ data }) => {
  const { id, image, title, desc, price, stock } = data

  const { addProductToCartAmount } = useContext(CartContext)

  const [amount, setAmount] = useState(1);
  const [showButton, setShowButton] = useState(false);

  return (
    <div className="card mb-3 mt-4" style={{ width: "100%", height: "auto" }}>
      <div className="row g-0">
        <div className="col-md-7">
          <img
            src={`/${image}`}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-5">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <p className="card-text">
              <small className="text-muted">$ {price}</small>
            </p>
            {!showButton ? (
              <ItemCount
                amount={amount}
                updateAmount={setAmount}
                setShowButton={setShowButton}
                stock={stock}
                data={data}
              />
            ) : (
              <>
              <button
                type="button"
                onClick={() => addProductToCartAmount({ id, image, title, desc, price, amount, stock })}
                className="btn btn-dark btn-add"
              >
                <Link to="/cartAmount">Terminar mi compra</Link>
              </button>
              <button
                type="button"
                className="btn btn-dark btn-add"
              >
                <Link to="/">Seguir Comprando</Link>
              </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
