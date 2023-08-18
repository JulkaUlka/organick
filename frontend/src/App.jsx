import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Header } from "./components/Header/Header";
import CartPage from "./pages/CartPage/CartPage"

const LazyHome = lazy(() => import("./pages/Home/Home"));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<LazyHome />} />
          </Route>
          <Route exact path='/cart' element={<CartPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
