import { Route, Routes } from "react-router";
import Header from "./Components/Header/subcomponents/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className=" ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route index element={<Shop />} />
          <Route path="project/:id" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
