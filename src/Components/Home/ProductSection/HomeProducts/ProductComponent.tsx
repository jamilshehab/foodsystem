import React from "react";
import { productData } from "../../../../data/data";
import { FaShoppingBasket } from "react-icons/fa";

const ProductComponent = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-3">
      {productData.map((item: any) => (
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
              {item.title}
            </h2>
            <div className="flex justify-center items-center py-3">
              <a
                href="/shop"
                className="bg-slate-300 px-4 py-3 h-fit w-fit rounded-2xl text-center "
              >
                {item.category}
              </a>
            </div>
            <p className="text-slate-500 text-center">{item.description}</p>
            <p className="text-xl mt-2 ml-1 text-center">{item.price} $</p>
            <div className="flex justify-center gap-4 my-4">
              <button className="bg-amber-300  py-2 px-6 rounded-2xl ">
                Quick View
              </button>
              <button className="bg-amber-300 py-2 px-6 rounded-2xl">
                View More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductComponent;
