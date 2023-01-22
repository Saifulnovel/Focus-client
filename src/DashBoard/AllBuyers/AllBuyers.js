import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import useTitle from "../../Hooks/useTitle/useTitle";

import ConfimationModal from "../../Main/Pages/CofirmationModal/ConfimationModal";

const AllBuyers = () => {
  useTitle("All Sellers");
  const [deleteUser, setDeleteUser] = useState(null);
  const closeModal = () => {
    setDeleteUser(null);
  };

  const url = ` http://localhost:5000/users/buyers?role=buyer`;
  const {
    data: buyers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  const handleDelete = (buyer) => {
    const url = ` http://localhost:5000/users/${buyer._id}`;

    fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Deleted");
        }
        refetch();
      });
  };

  return (
    <div>
      <div className="my-5">
        <h2 className="text-3xl underline mb-5">All Buyers</h2>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>

                <th>Delete a Buyer</th>
              </tr>
            </thead>
            <tbody>
              {buyers.map((buyer, i) => (
                <tr key={buyer._id} className="hover">
                  <th>{i + 1}</th>
                  <td>{buyer.name}</td>
                  <td>{buyer.email}</td>

                  <td className="tooltip  tooltip-warning" data-tip="DELETE">
                    <label
                      onClick={() => setDeleteUser(buyer)}
                      htmlFor="confirmation-modal"
                      className="btn bg-red-600 text-2xl btn-sm"
                    >
                      X
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {deleteUser && (
        <ConfimationModal
          title={`Are you to sure to delete this user?`}
          message={`if you delete ${deleteUser.name} once , it cannot be undone`}
          closeModal={closeModal}
          modalData={deleteUser}
          successAction={handleDelete}
        ></ConfimationModal>
      )}
    </div>
  );
};

export default AllBuyers;
