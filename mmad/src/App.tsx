import { Route, Routes } from "react-router";
import { ShopingCartProvider } from "./context/shopingCartContext";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import ProductPage from "./pages/productPage/ProductPage";
import ShoppingCart from "./pages/shopping-cart/ShoppingCart";

function App() {
  return (
    <>
      <ShopingCartProvider> 
      <Header />
      <Routes>
        <Route path="/ReactTest2" element={<Home />} />
        <Route path="/ReactTest2/store" element={<Store />} />
        <Route path="/ReactTest2/store/:id" element={<ProductPage />} />
        <Route path="/ReactTest2/shopping-cart" element={<ShoppingCart />} />
      </Routes>
      </ShopingCartProvider> 
    </>
  );
}

export default App;
