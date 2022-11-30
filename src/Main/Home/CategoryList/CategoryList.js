import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const { data = [] } = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      fetch(` https://camera-resell-server.vercel.app/category`).then((res) =>
        res.json()
      ),
  });
  console.log(data);
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-3 gap-10  justify-center  bg-slate-100 p-9 my-28 ">
      {data.map((category) => (
        <div key={category._id} className="relative">
          {" "}
          <div className="card  mx-auto h-60 bg-sky-100 glass shadow-2xl hover:shadow-inner">
            <div className="card-body  ">
              <h2 className="card-title text-4xl text-slate-900">
                {category.categoryName} Cameras
              </h2>
              <small>{category.details}</small>
              <div className="card-actions absolute bottom-4 right-6 justify-end">
                <Link to={`/category/${category.categoryId}`}>
                  {" "}
                  <button className="btn btn-outline btn-success">
                    Visit Now
                  </button>
                </Link>
              </div>
            </div>
          </div>{" "}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
