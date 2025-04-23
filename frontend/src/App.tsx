import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
        return; // Prevent further execution
      }

      try {
        const { data } = await axios.post(
          "/api/verify",
          {},
          { withCredentials: true }
        );
        if (data.status) {
          setUsername(data.user);
        } else {
          removeCookie("token", { path: "/" });
          navigate("/login");
        }
      } catch (error) {
        console.error("Verify error:", error);
        removeCookie("token", { path: "/" });
        navigate("/login");
      }
    };

    verifyCookie();
  }, [cookies.token, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token", { path: "/" });
    // Reset the toast shown flag on logout
    localStorage.removeItem("toastShown");
    navigate("/login");
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home userDisplay={username} userLogout={Logout} />}
        />
        <Route
          path="/about"
          element={<About userDisplay={username} userLogout={Logout} />}
        />
        <Route
          path="/shop"
          element={<Shop userDisplay={username} userLogout={Logout} />}
        />
        <Route
          path="/contact"
          element={<Contact userDisplay={username} userLogout={Logout} />}
        />
        <Route
          path="/cart"
          element={<Cart userDisplay={username} userLogout={Logout} />}
        />
        <Route
          path="/checkout"
          element={<Checkout userDisplay={username} userLogout={Logout} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
