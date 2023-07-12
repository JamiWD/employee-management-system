import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../../redux/state/UseReducer';

const UserTable = ({ user,index }) => {
      const { _id, name } = user;
      const dispatch = useDispatch()
    
      return (
            <tr>
                  <th>{index+1}</th>
                  <th>{_id}</th>
                  <td>{name}</td>
                  <td className=' flex gap-4'>
                        <Link to={`/view/${_id}`} className='btn btn-sm btn-secondary'>View</Link>
                        <Link to={`/update/${_id}`} className='btn btn-sm btn-info'>Edit</Link>
                        <button onClick={() => dispatch(deleteUser(_id))} className=' btn btn-sm btn-error'>Delete</button>
                  </td>

            </tr>
      );
};

export default UserTable;