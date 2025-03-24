import React from "react";
import { Link } from "react-router";

const CheckoutBanner = () => {
  return (
    <section
      className="h-[80vh] bg-cover bg-fixed relative flex items-center justify-center"
      style={{ backgroundImage: "url('/Banner/4.jpg')" }}
    >
      <div className="absolute top-0 w-full h-full bg-[#0008]"></div>

      <div className="container relative mx-auto flex flex-col items-center justify-center h-full space-y-6">
        <h1 className="text-white text-4xl text-center">Cart</h1>

        <Link
          to="/checkout"
          className="bg-yellow-400 text-white hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Check out
        </Link>
      </div>
    </section>
  );
};

export default CheckoutBanner;
