import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='container px-6 py-16 mx-auto text-center'>
        <div className='max-w-lg mx-auto'>
          <h1 className='text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl'>
            Taking Notes are being easier than ever.
          </h1>
          <p className='mt-6 text-gray-500 dark:text-gray-300'>
            We offers you taking notes in your fingertips with 0 hassel.
          </p>
                  <Link to='add-a-task'>
                  <button className='px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none'>
            Take Your First Note!
          </button>
                  </Link>
          <p className='mt-3 text-sm text-gray-400 '>No credit card required</p>
        </div>

        <div className='flex justify-center mt-10'>
          <img
            className='object-cover w-full h-96 rounded-xl lg:w-4/5'
            src='https://i.ibb.co/KjZNYtr/notes.jpg'
            alt='notes'
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
