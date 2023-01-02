import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import Loading from "../Loading/Loading";

const Addtask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);

  const handleAddTask = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          // console.log(imgData.data.url);
          const task = {
            name: data.name,
            email: data?.email,
            image: imgData.data.url,
            description: data.description,
          };

          // save task to the database
          fetch("https://taskey-server-sarwarhridoy4.vercel.app/add-task", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(task),
          })
            .then((res) => res.json())
            .then((result) => {
              // console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate(`/my-tasks/${data.email}`);
            });
        }
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='container flex items-center justify-center min-h-screen px-6 mx-auto'>
        <form
          onSubmit={handleSubmit(handleAddTask)}
          className='w-full max-w-md'
        >
          <div className='flex items-center justify-center mt-6'>
            <Link className='w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300'>
              Add A Task
            </Link>
          </div>

          <div className='relative flex items-center mt-8'>
            <span className='absolute'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 mx-3 text-gray-300 dark:text-gray-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                />
              </svg>
            </span>

            <input
              type='text'
              {...register("name", {
                required: "Task name is Required",
              })}
              className='block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
              placeholder='Task Name'
            />
            {errors.name && (
              <p className='text-red-500'>{errors.name.message}</p>
            )}
          </div>

          <div className='relative flex items-center mt-8'>
            <span className='absolute'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 mx-3 text-gray-300 dark:text-gray-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                />
              </svg>
            </span>

            <input
              type='email'
              defaultValue={user?.email}
              readOnly
              {...register("email", {
                required: "Task name is Required",
              })}
              className='block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
              placeholder='Task Name'
            />
            {errors.email && (
              <p className='text-red-500'>{errors.email.message}</p>
            )}
          </div>

          <label
            htmlFor='dropzone-file'
            className='flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 text-gray-300 dark:text-gray-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12'
              />
            </svg>

            <h2 className='mx-3 text-gray-400'>Photo</h2>

            <input
              id='dropzone-file'
              type='file'
              {...register("image", {
                required: "Image is Required",
              })}
              className='hidden'
            />
            {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
          </label>

          <div className='relative flex items-center mt-6'>
            <textarea
              type='text'
              {...register("description", {
                required: "Description is Required",
              })}
              className='block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
              placeholder='Task description'
            />
            {errors.description && (
              <p className='text-red-500'>{errors.description.message}</p>
            )}
          </div>

          <div className='mt-6'>
            <input
              value='Add Task'
              type='submit'
              className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Addtask;
