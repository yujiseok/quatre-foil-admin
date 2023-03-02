import Layout from "@components/Layout";
import Product from "@pages/Product";
import SignIn from "@pages/SignIn";
import ProductDetail from "@pages/ProductDetail";
import ProductList from "@pages/ProductsList";
import SignUp from "@pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<Layout />}>
          <Route path="/" index element={<ProductList />} />
          <Route path="product" index element={<Product />} />
          <Route path="product/:id" index element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
