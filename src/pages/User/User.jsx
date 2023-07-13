import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { showUser } from '../../redux/state/UseReducer';


const User = () => {
      const { id } = useParams();
      const dispatch = useDispatch()
      const { users,loading } = useSelector(state => state.users);
      
      const user= users.find(u=>u._id == id);
      useEffect(() => {
            dispatch(showUser())
      }, [id],dispatch)

      const {_id, name,email,phone}= user ;
      
      


      return (
            <div className="overflow-x-auto w-[90%] mx-auto">
                  <table className="table">
                        {/* head */}
                        <thead>
                              <tr className=' text-xl font-bold'>

                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>

                              </tr>
                        </thead>
                        <tbody>
                              <tr>
                                    <th>{_id}</th>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{phone}</td>

                              </tr>

                        </tbody>
                  </table>
            </div>
      );
};

export default User;