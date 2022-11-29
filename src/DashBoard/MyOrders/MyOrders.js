import {  useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthContext/AuthContext';
import useTitle from '../../Hooks/useTitle/useTitle';

const MyOrders = () => {

  useTitle('My Orders')
    const { user } = useContext(AuthContext)
    

    const url = `http://localhost:5000/myorders?email=${user?.email}`;

    const {data: myorders =[] } = useQuery({
        queryKey: ['myorders', user?.email],
        queryFn: async () => {
          const res = await fetch(url, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
            })
            const data = await res.json();
            return data;

        }
    })

    return (
      <div>
        <h3 className="text-3xl mb-8">My Orders</h3>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Products</th>
                <th>Price</th>
                <th>Phone Number</th>
                <th>Meeting LOcation</th>
              </tr>
            </thead>
            <tbody>
              {myorders.map((orders, i) => (
                <tr key={orders._id} className="hover">
                      <th>{i+1  }</th>
                      <td>{user?.displayName}</td>
                      <td>{ orders.name}</td>
                      <td>{ orders.price}$</td>
                      <td>{ orders.phone}</td>
                      <td>{ orders.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyOrders;