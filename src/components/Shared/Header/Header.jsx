import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/Auth/AuthContext";
import Toggle from "../../Theme/Toggle";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <nav className='bg-white shadow dark:bg-gray-800'>
      <div className='container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300'>
        <Link
          to='/'
          className='text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6'
        >
          Home
        </Link>

        <Link
          to='add-a-task'
          className='border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'
        >
          Add A Task
        </Link>

        <Link
          to={`my-tasks/${user?.email}`}
          className='border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'
        >
          My Tasks
        </Link>

        <Link
          to='completed-task'
          className='border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'
        >
          Completed
        </Link>

        <Toggle></Toggle>
        {user && (
          <Link>
            <button
              onClick={logOut}
              className='px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'
            >
              LogOut
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
