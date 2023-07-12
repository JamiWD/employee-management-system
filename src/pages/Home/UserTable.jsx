import React from 'react';
import { Link } from 'react-router-dom';
import { deleteUser } from '../../redux/state/UseReducer';
import { useDispatch } from 'react-redux';
const UserTable = ({ user }) => {
      const { id, name } = user;
      const dispatch = useDispatch()
      const handleDelete = (id) => {
            dispatch(deleteUser({ id: id }))
      }
      return (
            <tr>
                  <th>{id}</th>
                  <td>{name}</td>
                  <td className=' flex gap-4'>
                        <Link className='btn btn-sm btn-secondary'>View</Link>
                        <Link to={`/update/${id}`} className='btn btn-sm btn-info'>Edit</Link>
                        <button onClick={() => handleDelete(id)} className=' btn btn-sm btn-error'>Delete</button>
                  </td>

            </tr>
      );
};

export default UserTable;