
import React from 'react';
import { useSelector } from 'react-redux';
import UserTable from './UserTable';
import { Link } from 'react-router-dom';

const Home = () => {
      const users = useSelector((state) => state.users);
      console.log(users);
      return (
            <div>
                  <div className=' text-center'>
                        <Link to='/create' className='btn btn-success '>ADD USER</Link>
                  </div>
                  <div className="overflow-x-auto w-[90%] mx-auto">
                        <table className="table">
                              {/* head */}
                              <thead>
                                    <tr className=' text-xl font-bold'>
                                         
                                          <th>ID</th>
                                          <th>Name</th>
                                          <th>Actions</th>
                                         
                                    </tr>
                              </thead>
                              <tbody>
                                    {/* row 1 */}
                                    {
                                          users.map(user=><UserTable
                                          key={user.id} user={user}>

                                          </UserTable>)
                                    }
                                    
                              </tbody>
                        </table>
                  </div>
            </div>
      );
};

export default Home;