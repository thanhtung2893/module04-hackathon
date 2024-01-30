// EditUserModal.tsx
import React, { useState } from 'react';
import User from '../confige/user';

interface EditUserModalProps {
  user: User;
  onEditUser: (editedUser: User) => void;
  onCancelEdit: () => void;
}

const EditUser: React.FC<EditUserModalProps> = ({ user, onEditUser, onCancelEdit }) => {
  const [name, setName] = useState<string>(user.name);
  const [address, setAddress] = useState<string>(user.address);
  const [city, setCity] = useState<string>(user.city);
  const [pincode, setPincode] = useState<string>(user.pincode);
  const [country, setCountry] = useState<string>(user.country);

  const handleEdit = () => {
    const editedUser: User = {
      ...user,
      name,
      address,
      city,
      pincode,
      country,
    };
    onEditUser(editedUser);
    setName('');
    setAddress('');
    setCity('');
    setPincode('');
    setCountry('');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit</h2>
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
        <button onClick={handleEdit}>Save</button>
        <button onClick={onCancelEdit}>Cancel</button>
      </div>
    </div>
  );
};

export default EditUser;
