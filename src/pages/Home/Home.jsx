
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserTable from './UserTable';
import { Link } from 'react-router-dom';
import {  deleteUser, showUser } from '../../redux/state/UseReducer';
import CustomModal from '../../components/CustomModal';
import Swal from 'sweetalert2';

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
                  confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                  if (result.isConfirmed) {
                        dispatch(deleteUser(id));
                        Swal.fire(
                              'Deleted!',
                              'Your file has been deleted.',
                              'success'
                        );

                       

                  }
            });
      };

      return (
            <div>
                  {showpopup && <CustomModal
                        id={id} setShowPopup={setShowPopup}
                  ></CustomModal>}
                  <div className=' text-center'>
                        <Link to='/create' className='btn btn-success '>ADD USER</Link>
                  </div>
                  <div className="overflow-x-auto w-[90%] mx-auto">
                        <table className="table">

                              <thead>
                                    <tr className=' text-xl font-bold'>

                                          <th>#</th>
                                          <th>ID</th>
                                          <th>Name</th>
                                          <th>Actions</th>

                                    </tr>
                              </thead>
                              <tbody>

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