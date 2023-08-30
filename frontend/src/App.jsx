import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Header } from "./components/Header/Header";
import CartPage from "./pages/CartPage/CartPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const LazyHome = lazy(() => import("./pages/Home/Home"));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<LazyHome />} />
            <Route exact path="/cart" element={<CartPage />} />
            <Route exact path="/success" element={<SuccessPage />} />
            <Route exact path="/*" element={<ErrorPage />} />
          </Route>
          <Route path="/admin" element={<OrdersPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
