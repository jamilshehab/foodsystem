import React from "react";
import ProductComponent from "./ProductComponent";

const ProductContent = () => {
  return (
    <section className="py-10 bg-slate-100">
      <div className="container mx-auto relative">
        <div className="flex justify-center items-center pb-12">
          <h1 className="text-3xl ">Our Latest Products</h1>
        </div>
        <ProductComponent />
      </div>
    </section>
  );
};

export default ProductContent;
