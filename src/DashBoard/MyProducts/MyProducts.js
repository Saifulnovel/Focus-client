import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";



import { AuthContext } from "../../Authentication/AuthContext/AuthContext";
import useTitle from "../../Hooks/useTitle/useTitle";
import MyProductCard from "./MyProductsCard/MyProductsCard";



const MyProducts = () => {
  useTitle("My Products");
  const { user } = useContext(AuthContext);
  const url = ` https://camera-resell-server.vercel.app/product?email=${user?.email}`;
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });
  

  return (
    <div>
      <h2 className="text-2xl text-green-400 underline my-5">
        All products you posted for sell
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product, i) => (
          <MyProductCard key={product._id} product={product} i={i + 1} />
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
