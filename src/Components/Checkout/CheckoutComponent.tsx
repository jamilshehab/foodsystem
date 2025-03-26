import React from "react";

const CheckoutComponent = () => {
  return (
    <div>
      {" "}
      <div className="bg-white p-4">
        <div className="md:max-w-5xl max-w-xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 max-md:order-1">
              <h2 className="text-3xl font-bold text-slate-900">
                Make a payment
              </h2>
              <p className="text-slate-900 text-sm mt-4">
                Complete your transaction swiftly and securely with our
                easy-to-use payment process.
              </p>

              <form className="mt-12 max-w-lg">
                <div className="grid gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="px-4 py-3.5 bg-gray-100 text-slate-900 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="px-4 py-3.5 bg-gray-100 text-slate-900 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="number"
                        placeholder="EXP."
                        className="px-4 py-3.5 bg-gray-100 text-slate-900 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="CVV"
                        className="px-4 py-3.5 bg-gray-100 text-slate-900 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-8 w-40 py-3 text-[15px] font-medium bg-purple-500 text-white rounded-md hover:bg-purple-600 tracking-wide"
                >
                  Pay{" "}
                </button>
              </form>
            </div>

            <div className="bg-gray-100 p-6 rounded-md">
              <h2 className="text-3xl font-bold text-slate-900">$250.00</h2>

              <ul className="text-slate-900 font-medium mt-12 space-y-4">
                <li className="flex flex-wrap gap-4 text-sm">
                  Split Sneakers{" "}
                  <span className="ml-auto font-bold">$150.00</span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm">
                  Echo Elegance{" "}
                  <span className="ml-auto font-bold">$90.00</span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm">
                  Tax <span className="ml-auto font-bold">$10.00</span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm font-bold border-t-2 pt-4">
                  Total <span className="ml-auto">$250.00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
