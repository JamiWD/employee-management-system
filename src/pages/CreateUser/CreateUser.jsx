import React, { useState } from 'react';
import { addUser } from '../../redux/state/UseReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
      const [error, setError] = useState('');
      const [name, setName]= useState('')
      const [email, setEmail]= useState('')
      const [phone, setPhone]= useState('')

      const navigate= useNavigate()

      const users= useSelector((state)=>state.users);

      const dispatch= useDispatch();
      const handleSubmit=event=>{
            event.preventDefault();

            dispatch(addUser({id: users[users.length-1].id+1, name, email, phone}));

            navigate('/')
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
                                    onChange={e=>setName(e.target.value)}
                                   
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
                                    onChange={e=>setEmail(e.target.value)}
                                  
                              />
                        </div>




                        <div className="mb-4">
                              <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-1">
                                    Phone Number <span className=' text-red-500'>*</span>
                              </label>
                              <input
                                    type="number"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    placeholder='Enter phone number...'
                                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    onChange={e=>setPhone(e.target.value)}
                              />
                        </div>




                  
                  {
                        error && <p className=' text-red-600'>{error}</p>
                  }
                  <div className=' text-center'>
                        <button  type="submit" className="btn btn-info bg-blue-500 text-white px-4 py-3 w-full mt-6 hover:bg-sky-950 hover:text-white rounded-md">
                              Create
                        </button>
                  </div>
            </form>
      );
};

export default CreateUser;