import { useQuery } from "@tanstack/react-query";
import React from "react";

import ProductCard from "../ProductsCard/ProductsCard";

const Advertise = () => {
  const url = ` http://localhost:5000/seller/advertise`;

  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();

      return data;
    },
  });
  if (isLoading) {
    <progress className="progress w-56"></progress>;
  }

  // console.log(data);
  return (
    <>
      {data.length > 0 && (
        <div className="my-10">
          <h3 className="text-3xl text-green-500 font-bold mb-5">
            Advertised Product
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.map((singleProduct) => (
              <ProductCard
                key={singleProduct._id}
                singleProduct={singleProduct}
                refetch={refetch}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Advertise;
