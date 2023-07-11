import { Button } from 'flowbite-react';
import React from 'react';
import { useSelector } from 'react-redux';
import UserTable from './UserTable';

const Home = () => {
      const users = useSelector((state) => state.users);
      console.log(users);
      return (
            <div>
                  <div className="overflow-x-auto">
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