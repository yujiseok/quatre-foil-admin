import Layout from "@components/Layout";
import Product from "@pages/Product";
import SignIn from "@pages/SignIn";
import ProductDetail from "@pages/ProductDetail";
import ProductList from "@pages/ProductsList";
import SignUp from "@pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SalesList from "@pages/SalesList";
import { Suspense } from "react";
import Spinner from "@components/Spinner";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<Layout />}>
          <Route
            path="/"
            index
            element={
              <Suspense fallback={<Spinner />}>
                <ProductList />
              </Suspense>
            }
          />
          <Route path="product" index element={<Product />} />
          <Route
            path="product/:id"
            index
            element={
              <Suspense fallback={<Spinner />}>
                <ProductDetail />
              </Suspense>
            }
          />
          <Route
            path="sales/detail"
            element={
              <Suspense fallback={<Spinner />}>
                <SalesList />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
