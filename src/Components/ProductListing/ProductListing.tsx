import React, { useState } from "react";
import { productData } from "../../data/data";
import { FaShoppingBasket } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Modal from "react-modal";
import { FaCartShopping } from "react-icons/fa6";
const ProductListing = () => {
  //use state example to display modal
  const [isModal, setShowModal] = useState(undefined);
  const handleClose = () => setShowModal(undefined);
  const handleShow = (id: any) => setShowModal(id);

  return (
    <section className="py-5">
      <div className="container relative">
        <motion.div
          className="flex flex-wrap justify-center items-center gap-3"
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        >
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

                {/* <p className="text-slate-500 text-center">{item.description}</p> */}
                <p className="text-xl mt-2 ml-1 text-center">{item.price} $</p>
                <div className="flex justify-center gap-4 my-4">
                  <button
                    className="bg-primary text-white  py-2 px-6 rounded-2xl cursor-pointer"
                    onClick={() => handleShow(item.id)}
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
        {productData.map((item: any) => (
          <Modal
            isOpen={isModal === item.id}
            onRequestClose={handleClose}
            style={{
              overlay: {
                position: "fixed",
                zIndex: 1020,
                top: 0,
                left: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem", // Prevents edge clipping
              },
              content: {
                background: "white",
                width: "auto", // Adjusts to content
                display: "flex",
                inset: 0,
                justifyContent: "center",
                alignItems: "center",
                maxHeight: "90vh", // Prevents overflowing vertically
                overflowY: "auto", // Allows scrolling if necessary
                position: "relative",
                border: "1px solid #ccc",
                borderRadius: "0.5rem",
                // padding: "1.5rem",
              },
            }}
            key={item.id}
            contentLabel="X"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-gray-900 cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
              <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                  <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                    <img
                      className="w-full dark:hidden"
                      src={item.image}
                      alt=""
                    />
                  </div>

                  <div className="mt-6 sm:mt-8 lg:mt-0">
                    <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                      {item.title}
                    </h1>
                    <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                      <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                        {item.price} $
                      </p>
                    </div>
                    <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                    <p className="mb-6 text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>
                    <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                      <Link
                        to="#"
                        title=""
                        className="text-white mt-4 sm:mt-0 bg-primary hover:bg-primary-400 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600  focus:outline-none   flex items-center justify-center"
                        role="button"
                      >
                        <FaCartShopping className="me-3" />
                        Order Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        ))}
      </div>
    </section>
  );
};

export default ProductListing;
