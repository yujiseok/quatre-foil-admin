import Layout from "@components/Layout";
import Login from "@pages/Login";
import ProductList from "@pages/ProductsList";
import SignUp from "@pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<ProductList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
