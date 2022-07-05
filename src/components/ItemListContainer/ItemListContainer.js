import React, { Fragment } from "react";
import "./ItemListContainer.css";
import { Link } from "react-router-dom";

const ItemListContainer = ({ image, title, price, id }) => {
  return (
    <Fragment>
      <div className="col">
        <div className="card">
          <img src={`/${image}`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <button type="button" className="btn btn-secondary">
              <Link style={{ textDecoration: "none" }} to={`/productos/${id}`}>
                ver detalle
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemListContainer;
