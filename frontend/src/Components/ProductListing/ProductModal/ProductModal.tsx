import { FaCartShopping } from "react-icons/fa6";
import Modal from "react-modal";
import { Link } from "react-router";
import { ModalProps } from "../../../types";

const ProductModal = ({ product, onClose }: ModalProps) => {
  return (
    <Modal
      isOpen={!!product}
      onRequestClose={onClose}
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
          padding: "1rem",
        },
        content: {
          background: "white",
          width: "auto",
          display: "flex",
          inset: 0,
          justifyContent: "center",
          alignItems: "center",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          border: "1px solid #ccc",
          borderRadius: "0.5rem",
        },
      }}
      contentLabel="Product Modal"
    >
      <button
        onClick={onClose}
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
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                {product.name}
              </h1>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                  {product.price} $
                </p>
              </div>
              <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

              <p className="mb-6 text-gray-500 dark:text-gray-400">
                {product.description}
              </p>
              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                <button
                  className="text-white mt-4 sm:mt-0 bg-primary hover:bg-primary-400 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600  focus:outline-none   flex items-center justify-center"
                  role="button"
                >
                  <FaCartShopping className="me-3" />
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
