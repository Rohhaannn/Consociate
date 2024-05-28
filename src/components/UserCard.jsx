import React from 'react';

const UserCard = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50 transition-opacity duration-300 ease-out">
      <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg my-4 mx-auto relative transform transition-transform duration-300 ease-out scale-95">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-2 mr-2 text-white  bg-gray-500 hover:bg-white hover:text-black rounded-full px-3 py-3 text-center focus:outline-none"
        >
          ✖
        </button>
        <img className="w-full" src={user.avatar_url} alt={user.login} />
        <div className="px-6 py-4">
          <p className=" font-bold text-xl mb-2">Name: {user.name || 'N/A'}</p>
          <p className="text-gray-700 text-base mb-3"> <strong> Profile Created:</strong> {new Date(user.created_at).toISOString().split('T')[0]}</p>

          
          <hr/>
          <div className="text-gray-900 text-base mt-3"> <strong> Username:</strong>  {user.login}</div>
          <p className="text-gray-700 text-base"><strong >Public Repos: </strong>  {user.public_repos}</p>
          <p className="text-gray-700 text-base"> <strong> Public Gists: </strong>  {user.public_gists}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
          >
            Go to GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
