 import React, { useContext } from 'react';
import { toast } from "react-hot-toast";
import { AuthContext } from '../../../Authentication/AuthContext/AuthContext';

 
const OrderTakenModal = ({ order, setOrder }) => {
    const {user} = useContext(AuthContext)
    const { name, price, sellerName, _id,  } = order;

    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const buyerName = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
       
         


        const bookings = {
            itemId: _id,
            buyer: buyerName,email, phone,  price, sellerName, name
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setOrder(null)
                    toast('Succesfully Booked')
                }
                else {
                    toast.error(data.message)
                }
        })
                }


    return (
      <div>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">{name}</h3>
            <form onSubmit={handleOrder}>
              <div className="m-10 ">
                <label className="input-group input-group-vertical mb-7">
                  <span>Name</span>
                  <input
                    type="text"
                    defaultValue={user?.displayName}
                    disabled
                    placeholder=""
                    className="input input-bordered"
                  />
                </label>
                <label className="input-group input-group-vertical mb-7">
                  <span>Seller Name</span>
                  <input
                    type="text"
                    name="sellerName"
                    defaultValue={sellerName}
                    disabled
                    placeholder=""
                    className="input input-bordered"
                  />
                </label>
                <label className="input-group input-group-vertical mb-7">
                  <span>Email</span>
                  <input
                    type="text"
                    name="email"
                    defaultValue={user?.email}
                    disabled
                    placeholder=""
                    className="input input-bordered "
                  />
                </label>
                <label className="input-group input-group-vertical mb-7">
                  <span>Contact Number</span>
                  <input
                    type="text"
                    placeholder="number"
                    name="phone"
                    className="input input-bordered input-accent"
                  />
                </label>
              </div>
              <input
                type="submit"
                className="btn w-full btn-outline btn-secondary"
              />
            </form>
          </div>
        </div>
      </div>
    );
 };
 
 export default OrderTakenModal;