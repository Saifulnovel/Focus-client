import { useQuery } from "@tanstack/react-query";

import React, { useState } from "react";
import toast from "react-hot-toast";
import useTitle from "../../Hooks/useTitle/useTitle";
import ConfimationModal from "../../Main/Pages/CofirmationModal/ConfimationModal";

const Allusers = () => {
  useTitle("All Users");
  const [deleteUser, setDeleteUser] = useState(null);
  const closeModal = () => {
    setDeleteUser(null);
  };
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(" http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(` http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Admin making Successful");
          refetch();
        }
      });
  };
  const handleDelete = (user) => {
    const url = ` http://localhost:5000/users/${user._id}`;

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
      <h2 className="text-3xl">All Users</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Delete a users</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id} className="hover">
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-info"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <label
                    onClick={() => setDeleteUser(user)}
                    htmlFor="confirmation-modal"
                    className="btn btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default Allusers;
