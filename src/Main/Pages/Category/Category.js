import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const datas = useLoaderData()
    console.log(datas)
    // const {
    
    //   email,
    //   location,
    //   name,
    //   originalPrice,
    //   phone,
    //   picture,
    //   price,
    //   sellerName,
    //     used,
      
    // } = datas;


  

    return (
      <div className="bg-orange-100 p-10 ">
        <h1 className="font-bold font-serif text-3xl my-10">
          Here is some Pre-Owend Cameras That you have looking for
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {datas.map((data) => (
            <div className="mx-auto  " key={data._id}>
              {" "}
              <div className="card w-96 card-compact bg-base-100 shadow-xl">
                <figure>
                  <img src={data.picture} alt="Movie" />
                </figure>
                <div className="card-body mx-10">
                  <h2 className="card-title font-serif font-4">{data.name}</h2>
                  <div className="">
                    <p className="text-lg text-green-300">
                      Discount Price: {data.price} $
                    </p>
                    <p className="text-red-600 font-thin line-through">
                      Original Price $: {data.originalPrice}
                    </p>
                  </div>

                  <div className="flex justify-around">
                    <p>
                      {" "}
                      Location:{" "}
                      <span className="font-bold">{data.location}</span>{" "}
                    </p>
                    <p>
                      Used For:{" "}
                      <span className="font-bold">{data.used} year</span>
                    </p>
                  </div>
                  <div className="flex justify-around">
                    <p></p>
                    <p></p>
                  </div>
                  <h2 className="bg-sky-300 p-2 font-extrabold text-white">
                    Seller: {data.sellerName}
                  </h2>
                  <div className="card-actions justify-end">
                    <button htmlFor="order-modal" className="btn btn-primary">
                      Book Now
                    </button>
                    {/* onClick={modalHandle} */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Category;