import { CiDeliveryTruck, CiMap, CiShoppingCart } from "react-icons/ci";
import {
  IoFastFood,
  IoFastFoodOutline,
  IoRestaurantOutline,
} from "react-icons/io5";

const AboutGrid = () => {
  return (
    <section className="py-15 bg-slate-50  ">
      <div className="container relative mx-auto  max-w-6xl">
        <div className="flex justify-center items-center py-5">
          <div className="text-title">
            <h1 className="uppercase text-6xl text-slate-900">
              Get your food fast & Easy
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center py-5">
          <div className="text-subtitle">
            <h5 className="text-slate-400 font-bold text-4xl">
              Follow the Steps
            </h5>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center my-5">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 ">
            <div className="card relative flex flex-col items-center text-center">
              <div className="icon flex justify-center items-center my-5">
                <CiMap className="text-7xl" />
              </div>
              <div className="number px-5 py-2 bg-amber-400 h-fit w-fit rounded-full flex justify-center items-center my-5">
                <h4 className="text-white font-medium text-4xl">1</h4>
              </div>
              <h5 className="text-2xl text-slate-900">Choose Your Location</h5>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 ">
            <div className="card relative flex flex-col items-center text-center">
              <div className="icon flex justify-center items-center my-5">
                <IoRestaurantOutline className="text-7xl" />
              </div>
              <div className="number px-5 py-2 bg-amber-400 h-fit w-fit rounded-full flex justify-center items-center my-5">
                <h4 className="text-white font-medium text-4xl">2</h4>
              </div>
              <h5 className="text-2xl text-slate-900">Choose Restaurant</h5>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 ">
            <div className="card relative flex flex-col items-center text-center">
              <div className="icon flex justify-center items-center my-5">
                <IoFastFoodOutline className="text-7xl" />
              </div>
              <div className="number px-5 py-2 bg-amber-400 h-fit w-fit rounded-full flex justify-center items-center my-5">
                <h4 className="text-white font-medium text-4xl">3</h4>
              </div>
              <h5 className="text-2xl text-slate-900">Make Your Order</h5>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 ">
            <div className="card relative flex flex-col items-center text-center">
              <div className="icon flex justify-center items-center my-5">
                <CiDeliveryTruck className="text-7xl" />
              </div>
              <div className="number px-5 py-2 bg-amber-400 h-fit w-fit rounded-full flex justify-center items-center my-5">
                <h4 className="text-white font-medium text-4xl">4</h4>
              </div>
              <h5 className="text-2xl text-slate-900">Food Is On The Way</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGrid;
