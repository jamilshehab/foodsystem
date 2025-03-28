import { FaEye } from "react-icons/fa";
import { productCategoryData } from "../../../../../data/data";
import { motion } from "framer-motion";
import { Link } from "react-router";
const ProductCategoriesComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      className="flex flex-wrap justify-center items-center gap-3 my-6"
    >
      {productCategoryData.map((item: any) => (
        <div className="w-full md:w-1/2 lg:w-1/5 mb-4 " key={item.id}>
          <div className="w-72 h-fit group border-2 border-slate-100 bg-white shadow-2xl rounded-2xl">
            <div className="relative overflow-hidden">
              <img
                className="h-fit w-full object-cover rounded-2xl"
                src={item.image}
                alt=""
              />
              <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl">
                <Link
                  to="/shop/product"
                  className="bg-amber-300 rounded-full text-white py-4 px-4 z-10 cursor-pointer"
                >
                  <FaEye className="text-2xl" />
                </Link>
              </div>
            </div>
            <h2 className="mt-3 text-xl capitalize text-center py-2">
              {item.title}
            </h2>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default ProductCategoriesComponent;
