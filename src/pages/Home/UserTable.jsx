import React from 'react';

import { Link } from 'react-router-dom';


const UserTable = ({ user, index, setShowPopup, setId,handleDelete }) => {

      const { _id, name } = user;
    

      return (
            <tr className='text-center'>
                  <th>{index + 1}</th>
                  <th>{_id}</th>
                  <td className=' font-semibold'>{name}</td>
                  <td className=' flex gap-4 justify-center'>
                        <button onClick={() => [setId(_id), setShowPopup(true)]} className='btn btn-sm btn-secondary'>View</button>
                        <Link to={`/update/${_id}`} className='btn btn-sm btn-info'>Edit</Link>
                        <Link onClick={() => handleDelete(_id)} className=' btn btn-sm btn-error'>Delete</Link>
                  </td>
            </tr>
      );
};

export default UserTable;
