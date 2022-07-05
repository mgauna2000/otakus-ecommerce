import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.instagram.com/martin_gauna23/"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/in/martin-gauna-009a68208/"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://github.com/mgauna2000"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div className="text-center p-3">
          © 2022 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            By Martin Gauna
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
