import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { CookiesProvider, useCookies } from "react-cookie";
import useAuth from "./hooks/cookieHook";
import { useEffect, useState } from "react";

function App() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["token"]);
  const [userName, setUserName] = useState("");
  const { Logout, verifyCookie } = useAuth({
    navigate,
    cookies,
    removeCookie,
    setUserName,
  });
  useEffect(() => {
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  return (
    <CookiesProvider>
      <div className="div">
        <Routes>
          <Route
            path="/"
            element={<Home userDisplay={userName} userLogout={Logout} />}
          />
          <Route
            path="/about"
            element={<About userDisplay={userName} userLogout={Logout} />}
          />
          <Route
            path="/shop"
            element={<Shop userDisplay={userName} userLogout={Logout} />}
          />
          <Route
            path="/contact"
            element={<Contact userDisplay={userName} userLogout={Logout} />}
          />

          <Route
            path="/cart"
            element={<Cart userDisplay={userName} userLogout={Logout} />}
          />
          <Route
            path="/checkout"
            element={<Checkout userDisplay={userName} userLogout={Logout} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </CookiesProvider>
  );
}

export default App;
