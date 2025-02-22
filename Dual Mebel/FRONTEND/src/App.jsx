import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Main/Home/Home";
import Products from "./Pages/Main/Products/Products";
import Contact from "./Pages/Main/Contact/Contact";
import Basket from "./Pages/Main/Basket/Basket";
import Wishlist from "./Pages/Main/Wishlist/Wishlist";
import Detail from "./Pages/Main/Detail/Detail";
import Admin from "./Layout/Admin";
import AdminProduct from "./Pages/Admin/AdminProduct/AdminProduct";
import Add from "./Pages/Admin/Add/Add";
import { HelmetProvider } from "react-helmet-async";
import NoPage from "./Pages/NoPage";

export default function App() {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="basket" element={<Basket />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path=":id" element={<Detail />} />
          {/* <Route path="*" element={<NoPage/>} /> */}
        </Route>


        <Route path="/admin" element={<Admin />}>
            <Route index element={<AdminProduct />} />
            <Route path="add" element={<Add />} />
           
        </Route>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  );
}
