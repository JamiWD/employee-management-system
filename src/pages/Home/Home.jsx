
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserTable from './UserTable';
import { Link } from 'react-router-dom';
import {  deleteUser, showUser } from '../../redux/state/UseReducer';
import CustomModal from '../../components/CustomModal';
import Swal from 'sweetalert2';
import { BsArrowBarRight } from 'react-icons/bs';
const Home = () => {
      const dispatch = useDispatch();
      const [showpopup, setShowPopup] = useState(false);
      const [id, setId] = useState('')
      const { users, loading } = useSelector(state => state.app);
      

      useEffect(() => {

            dispatch(showUser());
      }, [])
      if (loading) {
            return <h2>Loading-----</h2>
      }

      const handleDelete = (id) => {
            Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'delete!'
            }).then((result) => {
                  if (result.isConfirmed) {
                        dispatch(deleteUser(id));
                        Swal.fire({
                              position: 'top-end',
                              icon: 'success',
                              title: 'Your work has been deleted',
                              showConfirmButton: false,
                              timer: 1500
                            })

                       

                  }
            });
      };

      return (
            <div>
                  {showpopup && <CustomModal
                        id={id} setShowPopup={setShowPopup}
                  ></CustomModal>}
                  <div className=' ml-[7%]'>
                        <Link to='/create' className='btn btn-info bg-blue-500 text-white px-4 py-3   hover:bg-sky-950 hover:text-white rounded-md'>Create a User <BsArrowBarRight size={30}/></Link>
                  </div>
                  <div className="overflow-x-auto w-[90%] mx-auto">
                        <table className="table">

                              <thead>
                                    <tr className=' text-xl font-bold '>

                                          <th>#</th>
                                          <th>ID</th>
                                          <th>Name</th>
                                          <th className='text-center'>Actions</th>

                                    </tr>
                              </thead>
                              <tbody >

                                    {
                                          users.map((user, index) => <UserTable
                                                key={index}
                                                index={index}
                                                user={user}
                                                handleDelete={handleDelete}
                                                setShowPopup={setShowPopup}
                                                setId={setId}
                                          />


                                          )
                                    }

                              </tbody>
                        </table>
                  </div>
            </div>
      );
};

export default Home;