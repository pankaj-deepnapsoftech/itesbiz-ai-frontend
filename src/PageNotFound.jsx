import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src='/notfound.svg' className='w-[500px] '/>
      <p className="text-lg text-gray-600 mb-6">Oops! The page you are looking for does not exist.</p>
      <button 
        onClick={() => navigate(-1)}
        className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition"
      >
        Go Back
      </button>
    </div>
  );
};

export default PageNotFound;
