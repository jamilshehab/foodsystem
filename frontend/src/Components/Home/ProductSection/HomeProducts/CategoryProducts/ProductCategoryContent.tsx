import React from "react";
import ProductCategoriesComponent from "./ProductCategoriesComponent";
import { motion } from "framer-motion";
const ProductCategoryContent = () => {
  return (
    <section className="py-5 bg-slate-100">
      <div className="container relative mx-auto">
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          className="flex justify-center items-center py-8"
        >
          <h1 className="text-3xl ">Our Latest Products</h1>
        </motion.div>
        <ProductCategoriesComponent />
      </div>
    </section>
  );
};

export default ProductCategoryContent;
