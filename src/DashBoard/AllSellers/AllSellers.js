import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle/useTitle';
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle";
import ConfimationModal from '../../Main/Pages/CofirmationModal/ConfimationModal';


const AllSellers = () => {
    useTitle('All Sellers')
    const [deleteUser, setDeleteUser] = useState(null);
     const closeModal = () => {
       setDeleteUser(null);
     };

    const url = `http://localhost:5000/users/sellers?role=seller`
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: { 
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            console.log(data);
            return data;
        }
    })
    const handleVerifySeller = (id) => {
        const url = `http://localhost:5000/users/verify/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast('Seller successfully verified')
                    refetch()
            }
            })
        
    }
     const handleDelete = (user) => {
       const url = `http://localhost:5000/users/${user._id}`;

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
          <h2 className="text-3xl underline mb-5">All Sellers</h2>

          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Verify</th>
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
                      {user?.verified ? (
                        <button className=" btn disabled btn-xs">
                          Verified{" "}
                          <span className="ml-3 text-green-600">
                            <FaCheckCircle />
                          </span>
                        </button>
                      ) : (
                        <button
                          onClick={() => handleVerifySeller(user._id)}
                          className="btn btn-outline btn-sm"
                        >
                          Verify Seller
                        </button>
                      )}
                    </td>
                    <td className="tooltip  tooltip-warning" data-tip="DELETE">
                     
                      <label
                        
                        onClick={() => setDeleteUser(user)}
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

export default AllSellers;