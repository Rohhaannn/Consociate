import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserCard from './components/UserCard';

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchUserData = async (username) => {
    try {
      setError('');
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('User not found');
      }
      const data = await response.json();
      setUser(data);
      setIsModalOpen(true);
    } catch (err) {
      setError(err.message);
      setUser(null);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setUser(null);
  };

  return (
    <div className="container mx-auto p-4">
      <UserForm onSubmit={fetchUserData} />
      {error && <p className="text-red-500">{error}</p>}
      {isModalOpen && user && <UserCard user={user} onClose={closeModal} />}
    </div>
  );
};

export default App;
