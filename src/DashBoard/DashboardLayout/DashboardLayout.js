import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthContext/AuthContext';
import useAdmin from '../../Hooks/useAdmin';
import Navbar from '../../Main/Navbar/Navbar';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)
    return (
      <div>
        <Navbar></Navbar>
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content ">
            <Outlet />
          </div>
          <div className="drawer-side">
            <label
              htmlFor="dashboard-drawer"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              <li>
                <Link to="/dashboard">My Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/addproduct">Add Products</Link>
              </li>
              {isAdmin && (
                <>
                  <li>
                    <Link to="/dashboard/allusers">All Users</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default DashboardLayout;