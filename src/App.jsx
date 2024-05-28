import './App.css'
import { useState } from 'react'
import UserCard from './components/UserCard'
import UserForm from './components/UserForm'

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const getUserData = async (username) => {
    try {
      setError('');
      const response = await fetch(`https://api.github.com/users/${username}`);
      if(!response.ok) {
        throw new Error('User Not Found');
      }
      const data = await response.json();
      setUser(data)
    } catch (error) {
      setError(error.message);
      setUser(null);
    }
  }

  return (
    <>
      <div>
        <UserForm onSubmit={getUserData} />
        {error && <p className='mt-5 text-red-600'>{error}</p>}
        {user && <UserCard user={user}/>}
      </div>
    
    </>
  )
}

export default App
