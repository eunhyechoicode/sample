import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";

import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductPage/>,
  },
  {
    path: "/cart",
    element: <CartPage/>,
  },
  {
    path: "/order",
    element: <OrderPage/>,
  },
]);

export default router