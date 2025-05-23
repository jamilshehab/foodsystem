import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules";
import { productHomeSliderData } from "../../../data/data";
import { Link } from "react-router";
import { motion } from "framer-motion";
// Import Swiper styles
const FoodBanner = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={0}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {productHomeSliderData.map((item: any) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-screen text-white">
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt="Background Image"
                  className="object-cover object-center w-full h-full"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                className="relative z-10 flex flex-col justify-center items-center h-full text-center"
              >
                <h1 className="text-5xl font-bold leading-tight mb-4">
                  {item.title}
                </h1>
                <p className="text-lg text-gray-300 mb-8">{item.description}</p>
                <Link
                  to="#"
                  className="bg-yellow-400 text-white hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Pagination Container */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-amber-300">
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default FoodBanner;
