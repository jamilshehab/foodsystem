const CardComponent = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-12">
      <div className="w-full md:w-1/2 lg:w-1/3 mb-4 ">
        <div className="relative m-auto">
          <div className="block rounded-lg bg-white text-white shadow-secondary-1 dark:bg-surface-dark">
            <img className="rounded-lg" src="/offer/1.webp" alt="" />
            <div className="absolute top-0 p-6 ">
              <h1 className="mb-2 text-3xl font-medium leading-tight text-center ">
                Limited-Time Offer! Get 50% Discount of Food
              </h1>
              <div className="my-5 text-center">
                <a
                  href="#"
                  className="bg-yellow-400 text-white hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 mb-4 ">
        <div className="relative">
          <div className="block rounded-lg bg-white text-white shadow-secondary-1 dark:bg-surface-dark">
            <img className="rounded-lg" src="/offer/2.webp" alt="" />
            <div className="absolute top-0 p-6">
              <h1 className="mb-2 text-3xl font-medium leading-tight text-center">
                Explore More Flavors! Satisfy Your Cravings
              </h1>
              <div className="my-5 text-center">
                <a
                  href="#"
                  className="bg-yellow-400 text-white hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                >
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
