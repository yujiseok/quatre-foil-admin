import Layout from "@components/Layout";
import AddProduct from "@pages/AddProduct";
import Login from "@pages/Login";
import ProductDetail from "@pages/ProductDetail";
import ProductList from "@pages/ProductsList";
import SignUp from "@pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<Layout />}>
          <Route path="/" index element={<ProductList />} />
          <Route path="product/add" index element={<AddProduct />} />
          <Route path="product/:id" index element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
