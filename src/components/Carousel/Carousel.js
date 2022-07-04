import React from "react";

const Carousel = () => {
  return (
    <>
    <div className="container">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner mt-3" style={{boxShadow: "1px 1px 4px 5px rgba(0, 0, 0, 0.30)"}}>
          <div class="carousel-item active">
            <img src="img.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h2>Variedad de Mangas, Cuadros y Funkos POP!</h2>
              
            </div>
          </div>
          <div class="carousel-item">
            <img src="img1.jpg" class="d-block w-100" alt="..." />

          </div>
          <div class="carousel-item">
            <img src="img2.jpg" class="d-block w-100" alt="..." />

          </div>
          <div class="carousel-item">
            <img src="img3.jpg" class="d-block w-100" alt="..." />

          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    </>
  );
};

export default Carousel;
