import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Header } from "./components/Header/Header";
import { Loader } from "./components/Loader/Loader";

const LazyHome = lazy(() => import("./pages/Home/Home"));
const LazyCartPage = lazy(() => import("./pages/CartPage/CartPage"));
const LazySuccessPage = lazy(() => import("./pages/SuccessPage/SuccessPage"));
const LazyErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"));
const LazyOrdersPage = lazy(() => import("./pages/OrdersPage/OrdersPage"));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<LazyHome />} />
            <Route exact path="/cart" element={<LazyCartPage />} />
            <Route exact path="/success" element={<LazySuccessPage />} />
            <Route exact path="/*" element={<LazyErrorPage />} />
          </Route>
          <Route path="/admin" element={<LazyOrdersPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
