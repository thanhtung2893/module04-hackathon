// UserForm.tsx
import React, { useState, useEffect } from 'react';
import User from '../confige/user';

interface UserFormProps {
  onAddUser: (user: User) => void;
  onEditUser: (editedUser: User) => void;
  userToEdit?: User;
}

const UserForm: React.FC<UserFormProps> = ({ onAddUser, onEditUser, userToEdit }) => {
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [pincode, setPincode] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  useEffect(() => {
    if (userToEdit) {
      setName(userToEdit.name);
      setAddress(userToEdit.address);
      setCity(userToEdit.city);
      setPincode(userToEdit.pincode);
      setCountry(userToEdit.country);
    }
  }, [userToEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (userToEdit) {
      const editedUser: User = {
        ...userToEdit,
        name,
        address,
        city,
        pincode,
        country,
      };
      onEditUser(editedUser);
    } else {
      const newUser: User = {
        id:Math.floor(Math.random() *999999),
        name,
        address,
        city,
        pincode,
        country,
      };
      onAddUser(newUser);
    }

    setName('');
    setAddress('');
    setCity('');
    setPincode('');
    setCountry('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <br />
      <label>
        City:
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
      <br />
      <label>
        Pincode:
        <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} />
      </label>
      <br />
      <label>
        Country:
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
      </label>
      <br />
      <button type="submit">{userToEdit ? 'Save' : 'Add User'}</button>
    </form>
  );
};

export default UserForm;
