import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const User = () => {
      const {id}= useParams();
      const users = useSelector(state => state.users);
  
      const currentUser= users.find(user=>user.id == id);
    
      const { name, email, phone}= currentUser;
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
                                    <th>{id}</th>
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