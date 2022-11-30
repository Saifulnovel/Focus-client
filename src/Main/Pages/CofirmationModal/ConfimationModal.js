import React, { Children } from 'react';

const ConfimationModal = ({ title, message,closeModal, modalData, successAction}) => {
  
    return (
      <div>
        

        <input
          type="checkbox"
          id="confirmation-modal"
          className="modal-toggle"
        />
        <div className="modal ">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
             {title}
            </h3>
            <p className="py-4">
             {message}
            </p>
            <div className="modal-action">
              <label onClick={()=>successAction(modalData)} htmlFor="confirmation-modal" className="btn btn-accent">
                Yes
              </label>
              <button onClick={closeModal} className='btn btn-outline btn-accent'>Cancle</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ConfimationModal;