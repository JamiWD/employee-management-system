import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../../redux/state/UseReducer';


const Update = () => {
      const d = useLoaderData()
      const navigate = useNavigate()
      const dispatch = useDispatch();
      const [updateData, setUpdateData] = useState(d);
   


      const newData = (e) => {
            setUpdateData({ ...updateData, [e.target.name]: e.target.value });
      }


      const handleSubmit = event => {
            event.preventDefault()
            // console.log(updateData);

            dispatch(updateUser(updateData))

            navigate('/')
      }
      return (
            < form className='w-[80%] md:w-1/2 mx-auto' onSubmit={handleSubmit}>
                  <h1 className='text-2xl font-semibold text-center mb-6'>Update a User</h1>

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
                              defaultValue={updateData && updateData.name}
                              onChange={newData}

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
                              defaultValue={updateData && updateData.email}
                              onChange={newData}

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
                              defaultValue={updateData && updateData.phoneNumber}
                              onChange={newData}
                        />
                  </div>

                  <div className=' text-center'>
                        <button type="submit" className="btn btn-info bg-blue-500 text-white px-4 py-3 w-full mt-6 hover:bg-sky-950 hover:text-white rounded-md">
                              Update
                        </button>
                  </div>
            </form>
      );
};

export default Update;