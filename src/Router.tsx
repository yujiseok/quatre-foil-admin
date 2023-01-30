import Login from "@pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
