import { useQuery } from '@tanstack/react-query';
import { Result } from 'postcss';
import React from 'react';
import toast from 'react-hot-toast';

const Allusers = () => {
    const {data: users =[], refetch} = useQuery({
      queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/users")
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Admin making Successful')
                    refetch();
            }
        })
    }
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
                      <th>{ i+1}</th>
                      <td>{ user.name}</td>
                      <td>{ user.email}</td>
                      <td>{ user?.role !== 'admin' && <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-info'>Make Admin</button>}</td>
                  <td><button className='btn btn-error'>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Allusers;