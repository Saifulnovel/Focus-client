import React from 'react';
import img from  '../../asset/ex.jpg'

const ExtraSession = () => {
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">
                Turn used camera gear into brand new possibilities!
              </h1>
              <p className="py-6">
                We’ll buy your used cameras, lenses, accessories, and other
                equipment at prices you can feel good about, and turn them into
                new opportunities—for you and your fellow photographers. We've
                been the best place to sell used camera equipment since 1979.
                Get the industry’s best resale rates, plus a bonus on the value
                of your payout when you spend or trade with us. Gear appraisals
                and shipping are always free—even if you choose to keep your
                gear.
              </p>
              <button className="btn btn-info">Get More Ideas</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ExtraSession;