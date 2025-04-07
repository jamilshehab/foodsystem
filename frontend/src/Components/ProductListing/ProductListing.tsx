import React, { useEffect, useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { motion } from "framer-motion";
import ProductModal from "./ProductModal/ProductModal";

const ProductListing = () => {
  const [selectedProduct, setSelectedProduct] = useState(false);

  const [product, setProduct] = useState([]);

  const getData = async () => {
    const res = await fetch("/api/foods");
    const data = await res.json();
    setProduct(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleShow = (item: any) => {
    setSelectedProduct(item);
  };

  const handleCloseModal = () => {
    setSelectedProduct(!selectedProduct);
  };

  return (
    <section className="py-5">
      <div className="container relative">
        <motion.div
          className="flex flex-wrap justify-center items-center gap-3"
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        >
          {product.map((item: any) => (
            <div className="w-full md:w-1/2 lg:w-1/5 mb-4 " key={item.id}>
              <div className="w-72 h-fit group border-2 border-slate-100 bg-white shadow-2xl rounded-2xl">
                <div className="relative overflow-hidden">
                  <img
                    className="h-fit w-full object-cover rounded-2xl"
                    src={item.image}
                    alt=""
                  />
                  <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl">
                    <button className="bg-amber-300 rounded-full text-white py-4 px-4 z-10 cursor-pointer">
                      <FaShoppingBasket className="text-2xl" />
                    </button>
                  </div>
                </div>
                <h2 className="mt-3 text-xl capitalize text-center">
                  {item.name}
                </h2>
                <p className="text-xl mt-2 ml-1 text-center">{item.price} $</p>
                <div className="flex justify-center gap-4 my-4">
                  <button
                    className="bg-primary text-white py-2 px-6 rounded-2xl cursor-pointer"
                    onClick={() => handleShow(item)}
                  >
                    Quick View
                  </button>
                  <button className="bg-primary text-white py-2 px-6 rounded-2xl cursor-pointer">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={handleCloseModal} />
        )}
      </div>
    </section>
  );
};

export default ProductListing;
