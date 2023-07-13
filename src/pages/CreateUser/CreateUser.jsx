import React, { useState } from 'react';
// import { addUser } from '../../redux/state/UseReducer';
import { useDispatch} from 'react-redux';
import { createUser } from '../../redux/state/UseReducer';
import { useNavigate } from 'react-router-dom';
import { BsArrowBarRight } from 'react-icons/bs';
import Swal from 'sweetalert2';

const CreateUser = () => {
      const [users, setUsers]=useState({});


      const navigate= useNavigate()

      // const users= useSelector((state)=>state.users);

      const dispatch= useDispatch();

      const getUserData=e=>{
            setUsers({...users,[e.target.name]:e.target.value});
            
      };


      const handleSubmit=event=>{
            event.preventDefault();
            const form = event.target;


            dispatch(createUser(users))
            Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'User successfully created!!!',
                  showConfirmButton: false,
                  timer: 1500
                })
                form.reset()
            

        
      }
      return (
            < form className='w-[80%] md:w-1/2 mx-auto' onSubmit={handleSubmit}>
                  <h1 className='text-2xl font-semibold text-center mb-6'>Create a User</h1>
                  
                        <div className="mb-4">
                              <label htmlFor="name" className="block text-gray-700 font-bold mb-1">
                                    Name <span className=' text-red-500'>*</span>
                              </label>
                              <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder='Enter Name...'
                                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    onChange={getUserData}
                                    required
                                   
                              />
                            
                        </div>
                        <div className="mb-4">
                              <label htmlFor="email" className="block text-gray-700 font-bold mb-1">
                                    Email <span className=' text-red-500'>*</span>
                              </label>
                              <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder='Enter Email...'
                                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    onChange={getUserData}
                                    required
                                  
                              />
                        </div>




                        <div className="mb-4">
                              <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-1">
                                    Phone Number <span className=' text-red-500'>*</span>
                              </label>
                              <input
                                    type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    placeholder='Enter phone number...'
                                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    onChange={getUserData}
                                    required
                              />
                        </div>




                  
                  
                  <div className=' text-center'>
                        <button  type="submit" className="btn btn-info bg-blue-500 text-white px-4 py-3 w-full mt-6 hover:bg-sky-950 hover:text-white rounded-md">
                              Create <BsArrowBarRight size={30}/>
                        </button>
                  </div>
            </form>
      );
};

export default CreateUser;