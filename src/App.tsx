import { Route, Routes } from "react-router";
import Header from "./Components/Header/subcomponents/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import FoodBanner from "./Components/common/FoodBanner";
import CardContent from "./Components/Home/CardContent";
import ProductContent from "./Components/Home/ProductContent";

function App() {
  return (
    <div className=" ">
      <Header />
      <FoodBanner />
      <CardContent />
      <ProductContent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<About />}>
          <Route index element={<Shop />} />
          <Route path="project/:id" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
