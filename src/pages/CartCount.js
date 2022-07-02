import React, { useContext } from "react";
import { useState } from "react";
import CartContext from "../context/CardContext";
import { addDoc, collection } from "firebase/firestore"
import db from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";

const CartCount = () => {

  const { cartListAmount, totalPriceAmount, cleanCartProducts } = useContext(CartContext);

  const navigate = useNavigate()
  
  const [formValue, setFormValue] = useState({
    name: '',
    phone: '',
    email: ''
  })

  const [order, setOrder] = useState({
    buyer: {},
    items: cartListAmount.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: item.price,
        amount: item.amount
      }
    }),
    date: new Date(),
    total: totalPriceAmount
  })  

  const [success, setSuccess] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submit", formValue)
    setOrder({...order, buyer: formValue})
    saveData({...order, buyer: formValue})
  }

  const handleChange = (e) => {
    setFormValue({...formValue, [e.target.name]: e.target.value})
  }

  const finishOrder = () => {
    navigate("/")
  }

  const saveData = async (newOrder) => {
    const orderFirebase = collection(db, "ordenes")
    const orderDoc = await addDoc(orderFirebase, newOrder)
    console.log(orderDoc)
    setSuccess(orderDoc.id)
    cleanCartProducts()
  }

  return (
    <>
    {/* {console.log("orden: ", order)} */}
      <div className="table-responsive">
        <h2 className="m-4">Productos agregados</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              {/* <th>Quitar</th> */}
            </tr>
          </thead>
          <tbody>
            {cartListAmount.map((item) => {
              const { id, title, image, price, amount } = item;
              return (
                <tr key={id}>
                  <td>
                    <img
                      src={`/${image}`}
                      style={{ width: "100px", height: "auto" }}
                    ></img>
                  </td>
                  <td className="pt-5">{title}</td>
                  <td className="pt-5">$ {price}</td>
                  <td className="pt-5">{amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
        <button type="button" className="btn btn-outline-dark mt-4" onClick={() => cleanCartProducts()}>
               Eliminar carrito
              </button>
          <h2 className="text-center">Total</h2>
          <p>$ {totalPriceAmount}</p>
        </div>
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn btn-secondary mb-4"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalButton"
        >
          Completar compra
        </button>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModalButton"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Formulario de Contacto
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {success ? (
                  <div>
                    La orden se genero con exito!! Numero de orden: {success}
                    <button type="button" data-bs-dismiss="modal" onClick={finishOrder} className="btn btn-primary mb-3">
                      Aceptar
                    </button>
                  </div>
                ) : (
                  <form className="row g-3" onSubmit={handleSubmit}>
                  <div className="col-auto">
                    <label for="inputName" className="visually-hidden">
                      Nombre y Apellido
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formValue.name}
                      className="form-control"
                      id="inputName"
                      placeholder="Nombre y Apellido"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-auto">
                    <label for="inputPhone" className="visually-hidden">
                      Telefono
                    </label>
                    <input
                      type="number"
                      name="phone"
                      value={formValue.phone}
                      className="form-control"
                      id="inputPhone"
                      placeholder="Telefono"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-auto">
                    <label for="inputEmail" className="visually-hidden">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formValue.email}
                      className="form-control"
                      id="inputEmail"
                      placeholder="Email"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">
                      Enviar
                    </button>
                  </div>
                </form>
                )}
                
              </div>
              <div className="modal-footer">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCount;
