import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const TaskCard = ({ task }) => {
  // console.log(task);
  const navigate = useNavigate();

  // deleting a task
  const handelDeleteTask = (_id) => {
    // console.log(task);
    fetch(`https://taskey-server-sarwarhridoy4.vercel.app/my-task/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        toast.success(`item deleted.`);
        navigate(`/`);
      });
  };
  return (
    <div>
      <div className='max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
        <div className='px-4 py-2'>
          <h1 className='text-3xl font-bold text-gray-800 uppercase dark:text-white'>
            {task?.name}
          </h1>
          <p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>
            {task?.description}
          </p>
        </div>

        <img
          className='object-cover w-full h-48 mt-2'
          src={task?.image}
          alt={task?.name}
        />

        <div className='flex items-center justify-between px-4 py-2 bg-gray-900'>
          <Link to={`/my-tasks/update/${task?._id}`}>
            <button className='px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none'>
              Update
            </button>
          </Link>
          <button
            onClick={() => handelDeleteTask(task?._id)}
            className='px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none'
          >
            Delete
          </button>
          <button className='px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none'>
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
