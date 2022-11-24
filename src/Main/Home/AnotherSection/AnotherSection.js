import React from 'react';


const AnotherSection = () => {
    return (
      <div>
        <div className="container my-44">
          <div className="mb-28 ">
            <h2 className="text-6xl font-serif font-thin mb-[-30px] text-green-600 font-semibold ">
              How Focus works !!
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card justify-center text-center  ">
              {/* <img
                className="w-3/2 container mx-auto"
                src={gather}
                alt="Shoes"
              /> */}
                        
              <div className="card-body">
                <h2 className="card-title text-4xl  justify-center">
                  <span className="bg-orange-400 btn-circle text-white p-auto">
                    1
                  </span>
                  Get Quote
                </h2>
                {/* <div className="badge text-green-700 badge-secondary">
                  Step 1
                </div> */}
                <p className="text-xs">
                  Select Your Device and We will set perfect price for you.{" "}
                </p>
              </div>
            </div>
            <div className="card  ">
              {/* <img
                className="w-1/2 container mx-auto"
                src={verify}
                alt="Shoes"
              /> */}
              <div className="card-body">
                <h2 className="card-title text-4xl  justify-center">
                  <span className="bg-orange-400 text-white btn-circle p-auto">
                    2
                  </span>
                  Schedule Pick Up
                </h2>
                {/* <div className="badge text-green-700 badge-secondary">
                  Step 2
                </div> */}
                <p className="text-xs">
                  Schedule a free pick up for your device from your home or work
                  at a time slot that best suits your convenience.
                </p>
              </div>
            </div>
            <div className="card  ">
              {/* <img
                className="w-1/2 container mx-auto"
                src={buysell}
                alt="Shoes"
              /> */}
              <div className="card-body">
                <h2 className="card-title text-4xl justify-center">
                  <span className="bg-orange-400 text-white btn-circle p-auto">
                    3
                  </span>
                  Get Paid
                </h2>
                {/* <div className="badge text-green-700 badge-secondary">
                  Step 3
                </div> */}
                <p className="text-xs">
                  Get instant payment at the time of pickup. We Provide Cash ,
                  Account transfer, Paytm, Googlepay, Upi immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AnotherSection;