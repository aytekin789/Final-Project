import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Product from "./pages/products/Product";
import Basket from "./pages/basket/Basket";
import Contact from "./pages/contact/Contact";
import Wishlist from "./pages/wishlist/Wishlist";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Product />} />
          <Route path="basket" element={<Basket />} />
          <Route path="contact" element={<Contact />} />
          <Route path="wishList" element={<Wishlist />} />
        </Route>
          <Route path="*" element={<h1>Not Found 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}