// UserList.tsx
import React, { useState } from 'react';
import User from '../confige/user';
import EditUserModal from './EditUser';

interface UserListProps {
  users: User[];
  onDeleteUser: (id: number) => void;
  onEditUser: (user: User) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onDeleteUser, onEditUser }) => {
  const [editModal, setEditModal] = useState<boolean>(false);
  const [editUserId, setEditUserId] = useState<number | null>(null);

  const handleEditClick = (id: number) => {
    setEditUserId(id);
    setEditModal(true);
  };

  const handleEditUser = (editedUser: User) => {
    onEditUser(editedUser);
    setEditModal(false);
  };

  const handleCancelEdit = () => {
    setEditModal(false);
  };

  return (
    <div>
      <table>

        <thead>
          <th>stt</th>
          <th>name</th>
          <th>address</th>
          <th>city</th>
          <th>pin code</th>
          <th>country</th>
          <th>action</th>

        </thead>
        <tbody>
        {users.map((user,index) => (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{user.name}</td>
            <td>{user.address}</td>
            <td>{user.city}</td>
            <td>{user.pincode}</td>
            <td>{user.country}</td>
            <td>
              <button onClick={() => onDeleteUser(user.id)}>Delete</button>
              <button onClick={() => handleEditClick(user.id)}>Edit</button>
            </td>

          </tr>
        ))}

          
        </tbody>
      </table>
    
      {editModal && editUserId  && (
        <EditUserModal
          user={users.find((user) => user.id === editUserId)!}
          onEditUser={handleEditUser}
          onCancelEdit={handleCancelEdit}
        />
      )}
    </div>
  );
};

export default UserList;
