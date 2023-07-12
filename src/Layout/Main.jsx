import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Link, Outlet } from 'react-router-dom';
import { CiMenuFries } from 'react-icons/ci';

const Main = () => {
      return (
            <div className="drawer lg:drawer-open">
                  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                  <div className="drawer-content ">
                        {/* Page content here */}
                        <div className='flex items-center md:block gap-4 bg-white shadow mb-10'>
                            
                              <label htmlFor="my-drawer-2" className="drawer-button lg:hidden ext-8xl font-extrabold cursor-pointer"><CiMenuFries size={50} className=' pl-4' /></label>
                              <Header></Header>
                        </div>

                        <Outlet></Outlet>

                  </div>

                  <div className="drawer-side shadow-xl drop-shadow-lg">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-white  text-base-content">
                              {/* Sidebar content here */}
                              <div>USER MANAGER</div>
                              <li><Link to='/dashboard'>Dashboard</Link></li>
                              <li><Link to='/'>Users</Link></li>
                        </ul>

                  </div>
            </div>
      );
};

export default Main;