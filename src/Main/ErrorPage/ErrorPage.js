import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
      <div className='bg-cyan-50 p-44'>
        <div className="flex justify-center">
          <div className="card  bg-sky-500 text-neutral-content">
            <div className="card-body items-center text-center">
              <h2 className=" text-6xl card-title animate-bounce">404 Page not found!</h2>
              <p>the page you have request for is not found</p>
                        <div className="card-actions justify-end">
                            <Link to='/' className='btn btn-outline' >Come back to home</Link>
                {/* <button className="btn btn-primary">Accept</button>
                <button className="btn btn-ghost">Deny</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ErrorPage;