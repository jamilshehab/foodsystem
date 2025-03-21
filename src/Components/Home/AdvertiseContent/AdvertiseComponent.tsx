import { Link } from "react-router";
import { advertisingContentData } from "../../../data/data";
import { motion } from "framer-motion";
const AdvertiseComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      className="flex flex-wrap justify-center items-center gap-12"
    >
      {advertisingContentData.map((item: any) => (
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 " key={item.id}>
          <div className="relative m-auto">
            <div className="block rounded-lg bg-white text-white shadow-secondary-1 dark:bg-surface-dark">
              <img className="rounded-lg" src={item.image} alt="" />
              <div className="absolute top-0 p-6 ">
                <h1 className="mb-2 text-3xl font-medium leading-tight text-center ">
                  {item.title}
                </h1>
                <div className="my-5 text-center">
                  <Link
                    to={item.link}
                    className="bg-yellow-400 text-white hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                  >
                    {item.linkTitle}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default AdvertiseComponent;
