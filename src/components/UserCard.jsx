import React from 'react'

const UserCard = ({user}) => {
  return (
    <div>
      <div className='max-w-sm rounded overflow-hidden shadow-lg my-4 mx-auto border boder-white p-3'>
        <img
          className='w-full rounded'
          src={user.avatar_url}
          alt={user.login}
        />

        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>{user.login}</div>
          <p className='text-gray-700 text-base'>Name: {user.name} </p>
          <p className='text-gray-700 text-base'>Public Repos: {user.public_repos} </p>
          <p className='text-gray-700 text-base'>Public Gists: {user.public_gists}</p>
          <p className='text-gray-700 text-base'>Profile Created: {new Date(user.created_at).toISOString().split('T')[0]} </p>

          <br/>

          <a 
            href={user.html_url}
            target='_blank'
            className='bg-blue-500 text-white hover:bg-blue-700 font-bold py-3 px-3 rounded-lg shadow-xl text-center'
          > Go to Github Profile </a>
        </div>

      </div>
      
    </div>
  )
}

export default UserCard
