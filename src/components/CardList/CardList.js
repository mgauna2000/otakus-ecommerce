import React, { useState, useEffect }from "react";
import ItemList from "../ItemList/ItemList";
// import Item from "../Item/Item";
// import ItemListContainer from "../ItemListContainer/ItemListContainer";

export const CardList = () => {

  const [products, setProducts] = useState([]);



  return (
    <>
          <ItemList products={products}/>
    </>
  );
};
