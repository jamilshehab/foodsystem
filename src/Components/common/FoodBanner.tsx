// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";

// Import Swiper styles
const FoodBanner = () => {
  return (
    <Swiper
      spaceBetween={0}
      modules={[Pagination]}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="relative   h-screen  text-white  ">
          <div className="absolute inset-0">
            <img
              src="/Banner/1.jpg"
              alt="Background Image"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-5xl font-bold leading-tight mb-4">
              Welcome to Our Awesome Website
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Discover amazing features and services that await you.
            </p>
            <a
              href="#"
              className="bg-yellow-400 text-white hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative   h-screen  text-white  ">
          <div className="absolute inset-0">
            <img
              src="/Banner/2.jpg"
              alt="Background Image"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-5xl font-bold leading-tight mb-4">
              Welcome to Our Awesome Website
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Discover amazing features and services that await you.
            </p>
            <a
              href="#"
              className="bg-yellow-400 text-white hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative   h-screen  text-white  ">
          <div className="absolute inset-0">
            <img
              src="/Banner/3.jpg"
              alt="Background Image"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-5xl font-bold leading-tight mb-4">
              Welcome to Our Awesome Website
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Discover amazing features and services that await you.
            </p>
            <a
              href="#"
              className="bg-yellow-400 text-white hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default FoodBanner;
