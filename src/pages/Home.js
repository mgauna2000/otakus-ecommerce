import React from 'react'
// import { CardList } from '../components/CardList/CardList'
import ItemList from '../components/ItemList/ItemList'
import Carousel from "../components/Carousel/Carousel";
import "../components/ItemListContainer/Home.css"
import Footer from '../components/Footer/Footer';

const Home = () => {

  return (
    <>
    <Carousel/>
    <h2 className="card-text">Productos</h2>
    <ItemList />
    <Footer/>
    </>
  )
}

export default Home