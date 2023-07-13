import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
      const {users}= useSelector(state=>state.app);
      return (
            <div>
                  <h1 className='text-center text-4xl font-bold'>Total Users : {users.length}</h1>
            </div>
      );
};

export default Dashboard;