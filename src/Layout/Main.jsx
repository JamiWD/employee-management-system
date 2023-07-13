import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { CiMenuFries } from 'react-icons/ci';
import { FaUser, FaUsers } from 'react-icons/fa';
import { GrContact } from 'react-icons/gr';
import { MdAdminPanelSettings, MdOutlineHome } from "react-icons/md";
const Main = () => {
      const location = useLocation();

      return (
            <div className="drawer lg:drawer-open">
                  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                  <div className="drawer-content ">
                        {/* Page content here */}
                        <div className='flex items-center md:block gap-4 bg-white shadow mb-10'>

                              <label htmlFor="my-drawer-2" className="drawer-button lg:hidden ext-8xl font-extrabold cursor-pointer"><CiMenuFries size={50} className=' pl-4 ' /></label>
                              <Header></Header>
                        </div>

                        <Outlet></Outlet>

                  </div>

                  <div className="drawer-side shadow-xl drop-shadow-lg ">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-white  text-base-content">
                              {/* Sidebar content here */}
                              <div className=' text-3xl text-blue-700 font-bold ml-4 flex  items-center gap-3'><MdAdminPanelSettings size={50} className='text-black' /> <span>Admin</span> </div>


                              <div className='mt-20 text-xl font-semibold'>
                                    <li>
                                          <Link className={`
                                    ${location?.pathname === '/dashboard' ? 'bg-slate-700 text-white' : ''}
                                    `} to='/dashboard'><MdOutlineHome size={30} /> Dashboard</Link>
                                    </li>
                                    <li>
                                          <Link className={`
                                    ${location?.pathname === '/' ? 'bg-slate-700 text-white' : ''}
                                    `} to='/'><FaUsers /> Users</Link>
                                    </li>
                                    <li>
                                          <Link className={`
                                    ${location?.pathname === '/create' ? 'bg-slate-700 text-white' : ''}
                                    `} to='/create'><FaUser /> Create User</Link>
                                    </li>
                                    <li>
                                          <Link className={`
                                    ${location?.pathname === '/contact' ? 'bg-slate-700 text-white' : ''}
                                    `} to='/contact'><GrContact/> Contact </Link>
                                    </li>
                              </div>

                        </ul>

                  </div>
            </div>
      );
};

export default Main;