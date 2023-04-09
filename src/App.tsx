import {FC} from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";

const App: FC = () => {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductDetails />} />
        {/* <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </div>
  );
}

export default App;
