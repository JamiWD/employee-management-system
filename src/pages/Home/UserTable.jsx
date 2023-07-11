import React from 'react';

const UserTable = ({ user }) => {
      const {id, name}=user;
      return (
            <tr>
                  <th>{id}</th>
                  <td>{name}</td>
                  <td className=' flex gap-4'>
                        <button className='btn btn-sm btn-secondary'>View</button>
                        <button className='btn btn-sm btn-info'>Edit</button>
                        <button className=' btn btn-sm btn-error'>Delete</button>
                  </td>
                  
            </tr>
      );
};

export default UserTable;