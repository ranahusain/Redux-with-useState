import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Router,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/AboutUs";
import Product from "./pages/Product";
import Careers from "./pages/Careers";
import Community from "./pages/Community";
import NotFoundPage from "./pages/NotFoundPage";
import Career from "./pages/Career";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counter/counterSlice";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Careers" element={<Careers />} />
      <Route path="/Careers/:id" element={<Career />} />
      <Route path="/Community" element={<Community />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>Hello there i am count {count}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <RouterProvider router={router} />
    </>
  );
}

export default App;
