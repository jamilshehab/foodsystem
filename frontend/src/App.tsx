import { Navigate, Route, Routes, useNavigate } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";

function App() {
  const isAuthenticated = localStorage.getItem("auth_token");
  return (
    <div className=" ">
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Home /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/about"
          element={
            isAuthenticated ? <About /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/shop"
          element={
            isAuthenticated ? <Shop /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/contact"
          element={
            isAuthenticated ? <Contact /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/shop/:product"
          element={
            isAuthenticated ? <Product /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/cart"
          element={
            isAuthenticated ? <Cart /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/checkout"
          element={
            isAuthenticated ? <Checkout /> : <Navigate to="/login" replace />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
