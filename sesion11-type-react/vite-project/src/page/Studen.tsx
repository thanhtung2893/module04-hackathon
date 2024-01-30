// App.tsx
import React, { useState, useEffect } from 'react';
import UserForm from '../components/UserFrom';
import UserList from '../components/UserList';
import User from '../confige/user';
import './Student.css';

const Studen: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [userToEdit, setUserToEdit] = useState<User | any>(null);

  useEffect(() => {
    const allUsers = localStorage.getItem('users');
    if (allUsers) {
      setUsers(JSON.parse(allUsers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleAddUser = (user: User) => {
    setUsers((i) => [...i, user]);
  };

  const handleDeleteUser = (id: number) => {
    setUsers((i) => i.filter((user) => user.id !== id));
  };

  const handleEditUser = (edit: User) => {
    setUsers((i) =>
      i.map((user) => (user.id === edit.id ? edit : user))
    );
    setUserToEdit(null);
  };

  return (
    <div>
      <h1>students</h1>
      <UserForm onAddUser={handleAddUser} onEditUser={handleEditUser} userToEdit={userToEdit} />
      <UserList users={users} onDeleteUser={handleDeleteUser} onEditUser={setUserToEdit} />
    </div>
  );
};

export default Studen;
