import React,{ useState } from 'react'

const UserForm = ({onSubmit}) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <input
          type='text'
          value={username}
          onChange={(e)=>setUsername(e.target.value)}  
          placeholder='Enter Github Username'
          className='p-2 border border-black rounded mb-4'
        />

        <button
          type='submit'
          className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded'
        > 
          Get Profile 
        </button>
      </form>
    </div>
  )
}

export default UserForm
