import {FC} from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import NoPage from "./components/NoPage";
import { ShoppingCartProvider } from "./store/CartContext";

const App: FC = () => {

  return (
    <ShoppingCartProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
