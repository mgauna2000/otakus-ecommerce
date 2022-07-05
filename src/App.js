import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import NotFound from "./pages/NotFound";
import Detalle from "./pages/Detalle";
import ProductsList from "./pages/ProductsList";
import { CartProvider } from "./context/CardContext";
import CartCount from "./pages/CartCount";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/nosotros" element={<Nosotros />} />
            <Route
              exact
              path="/products/:category"
              element={<ProductsList />}
            />
            <Route exact path="/productos/:id" element={<Detalle />} />
            <Route exact path="/cartAmount" element={<CartCount />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
