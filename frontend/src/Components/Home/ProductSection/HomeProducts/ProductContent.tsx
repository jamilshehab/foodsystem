import React from "react";
import ProductComponent from "./ProductComponent";
import { motion } from "framer-motion";
const ProductContent = () => {
  return (
    <section className="py-10 bg-slate-100">
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          className="flex justify-center items-center pb-12"
        >
          <h1 className="text-3xl ">Our Latest Products</h1>
        </motion.div>
        <ProductComponent />
      </div>
    </section>
  );
};

export default ProductContent;
