
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
import OrderTakenModal from "../OrderTakenModal/OrderTakenModal";

const CategoryPage = () => {
     const datas = useLoaderData();
    const [order, setOrder] = useState(null);
    console.log(order);
    return (
      <>
        <h1 className="font-bold font-serif text-3xl my-10">
          Here is some Pre-Owend Cameras That you have looking for
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {datas.map((data) => (
            <Category
              key={data._id}
              setOrder={setOrder}
              data={data}
            ></Category>
          ))}
        </div>

        {order && (
          <OrderTakenModal
            order={order}
            setOrder={setOrder}
          ></OrderTakenModal>
        )}
      </>
    );
};

export default CategoryPage;