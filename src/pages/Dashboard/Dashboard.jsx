import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
      const { users } = useSelector(state => state.app);
      return (
            <div>
                  <h1 className=' text-blue-500 text-center text-4xl font-bold'>Total Employees : {users.length}</h1>
                  <h2></h2>
            </div>
      );
};

export default Dashboard;