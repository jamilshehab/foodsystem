import React from "react";
import ProductCategoriesComponent from "./ProductCategoriesComponent";

const ProductCategoryContent = () => {
  return (
    <section className="py-5 bg-slate-100">
      <div className="container relative mx-auto">
        <div className="flex justify-center items-center py-8">
          <h1 className="text-3xl ">Our Latest Products</h1>
        </div>
        <ProductCategoriesComponent />
      </div>
    </section>
  );
};

export default ProductCategoryContent;
