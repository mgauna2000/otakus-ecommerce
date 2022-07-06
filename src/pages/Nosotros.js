import React from "react";
import "./Nosotros.css";

const Nosotros = () => {
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
        <a
          href="https://getbootstrap.com/docs/5.2/getting-started/introduction/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="32"
            className="me-2"
            viewBox="0 0 118 94"
            role="img"
          >
            <title>Bootstrap</title>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="fs-4">Sitio realizado con Bootstrap</span>
        </a>
      </header>

      <main>
        <h1>Costos de envío</h1>
        <p className="fs-5 col-md-8 m-4">ENVIOS NACIONALES :</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item mb-2">
            POR MOTOMENSAJERIA: A CAPITAL FEDERAL EL ENVIO ES GRATIS EN COMPRAS
            DE $3800 O MAS. SI NO ALCANZA ESE MINIMO, TIENE UN COSTO FIJO DE
            $300
          </li>
          <li className="list-group-item mb-2">
            POR MOTOMENSAJERIA: A GRAN BUENOS AIRES EL ENVIO ES GRATIS EN
            COMPRAS DE $3800 O MAS DE LIBROS DE IVREA ARGENTINA, OVNI PRESS O
            PANINI ARGENTINA . SI NO ALCANZA ESE MINIMO, TIENE UN COSTO FIJO DE
            $400
          </li>
          <li className="list-group-item mb-2">
            POR CORREO A SUCURSAL DE CORREO ARGENTINO EN TODO EL PAIS: EL ENVIO
            ES GRATIS EN COMPRAS DE $3800 O MAS DE LIBROS DE IVREA ARGENTINA,
            OVNI PRESS O PANINI ARGENTINA . SI NO ALCANZA ESE MINIMO, TIENE UN
            COSTO FIJO DE $400
          </li>
          <li className="list-group-item mb-2">
            POR CORREO ARGENTINO A DOMICILIO EN TODO EL PAIS: TIENE UNA TARIFA
            PLANA A TODO EL PAIS DE $450 ES FIJO, NO IMPORTA LA CANTIDAD DE
            LIBROS PEDIDOS
          </li>
          <li className="list-group-item mb-2">
            TAMBIEN PODRA ELEGIR LA OPCION RETIRO EN EL LOCAL Y RETIRAR SU
            PEDIDO A PARTIR DE LAS 24HS DE ABONADO EL MISMO
          </li>
        </ul>

        <hr className="col-3 col-md-2 mb-5" />

        <div className="row g-5">
          <div className="col-md-6">
            <h2>Otaku's</h2>
            <p className="m-4">
              Somos una empresa destinada a la venta de productos Japoneses en
              toda Argentina, llevamos 2 años de experiencia en este rubro y
              mantenemos una agradable atención como tambien la buena calidad de
              nuestros productos.
            </p>
          </div>

          <div className="col-md-6">
            <h2>Redes</h2>
            <p>Pueden contactarnos a nuestras redes.</p>
            <ul className="icon-list">
              <li>
                <a href="https://www.instagram.com/martin_gauna23/">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/martin-gauna-009a68208/">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/mgauna2000">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <footer className="pt-5 my-5 text-muted border-top">
        Created by mgauna2000 &middot; &copy; 2022
      </footer>
    </div>
  );
};

export default Nosotros;
