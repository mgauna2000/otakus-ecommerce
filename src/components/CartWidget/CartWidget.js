import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CardContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { cartListAmount, removeProduct } = useContext(CartContext);

  return (
    <>
      <i
        className="fa-solid fa-cart-shopping m-4"
        data-bs-target="#exampleModal"
        data-bs-toggle="modal"
        style={{ cursor: "pointer", color: "#fff" }}
      ></i>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Productos agregados al carrito
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {cartListAmount.length === 0 && (
                <p>No hay productos agregados al carrito</p>
              )}
              {cartListAmount.map((item) => {
                const { id, title, image, price, amount } = item;
                return (
                  <div className="products-container text-center" key={id}>
                    <div>
                      <h4 className="card-title">{title}</h4>
                      <p className="card-text">
                        <small className="text-muted">$ {price}</small>
                      </p>
                      <i
                        className="fa-solid fa-trash"
                        style={{ cursor: "pointer" }}
                        onClick={() => removeProduct(id, price, amount)}
                      ></i>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-outline-success"
                data-bs-dismiss="modal"
              >
                <Link
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/cartAmount"
                >
                  Terminar la compra
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartWidget;
