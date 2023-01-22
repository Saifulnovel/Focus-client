import React from 'react';
import banner from '../../asset/banner.jpg'

const Banner = () => {
    return (
      <div>
        <div
          className="hero min-h-screen"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1000"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-white ">
            <div
              className=""
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <h1 className="mb-5 text-6xl antialiased hover:subpixel-antialiased font-semibold font-mono">
                Pre-Owend Cameras
              </h1>
              <p className="mb-5">
                Shop our wide selection of used photography and video equipment,
                lenses, lighting, computers, drones, audio and more. Each item
                is graded with accurate ratings from industry experts and backed
                by our 30-day money back guarantee.
              </p>
              {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;