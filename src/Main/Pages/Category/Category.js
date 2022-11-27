
import React from "react";
 
const Category = ({data, setOrder}) => {
 
  // const modalHandle = () => {
  //   setBooknow(data);
  //   console.log("hi breo");
  //  }
  

  return (
    <div className="bg-orange-100 p-10 ">
      <div className="">
        <div className="mx-auto  " key={data._id}>
          {" "}
          <div className="card w-96 card-compact bg-base-100 shadow-xl">
            <figure>
              <img src={data.picture} alt="Movie" />
            </figure>
            <div className="card-body mx-10">
              <h2 className="card-title font-serif font-4">{data.name}</h2>
              <div className="">
                <p className=" font-bold  text-lg text-green-600">
                  Discount Price: {data.price} $
                </p>
                <p className="text-red-600 font-mono line-through">
                  Original Price $: {data.originalPrice}
                </p>
              </div>

              <div className="flex justify-around">
                <p>
                  {" "}
                  Location: <span className="font-bold">
                    {data.location}
                  </span>{" "}
                </p>
                <p>
                  Used For: <span className="font-bold">{data.used} year</span>
                </p>
              </div>
              <div className="flex justify-around">
                <p></p>
                <p></p>
              </div>
              <h2 className="bg-sky-200 p-2 font-extrabold rounded-2xl ">
                Seller: {data.sellerName}
              </h2>
              <div className="card-actions justify-end">
                <label
                  onClick={() => setOrder(data)}
                  htmlFor="booking-modal"
                  className="btn btn-outline btn-accent"
                >
                  Book Now
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;