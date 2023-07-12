
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserTable from './UserTable';
import { Link } from 'react-router-dom';
import { showUser } from '../../redux/state/UseReducer';
import CustomModal from '../../components/CustomModal';

const Home = () => {
      const dispatch = useDispatch();
      const [showpopup, setShowPopup]= useState(false);
      const {users,loading}= useSelector(state=>state.users);
      console.log(users);
      useEffect(()=>{
           
      dispatch(showUser());
      },[])
      if(loading){
            return <h2>Loading-----</h2>
      }
      
      return (
            <div>
                 {showpopup &&<CustomModal></CustomModal>}
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
                                          users.map((user,index)=><UserTable
                                          key={user._id} index={index} user={user}>

                                          </UserTable>)
                                    }
                                    
                              </tbody>
                        </table>
                  </div>
            </div>
      );
};

export default Home;