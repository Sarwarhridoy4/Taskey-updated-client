import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TaskCard from '../TaskCard/TaskCard';


const MyTask = () => {
    
    const usertasks = useLoaderData();
    // console.log(usertasks);
    
    return (
        <div className='min-w-screen min-h-screen dark:bg-slate-900'>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-screen w-4/5 mx-auto my-5'>
                {
                usertasks.map((task,i)=><TaskCard key={i} task={task}></TaskCard>)
            }
        </div>
        </div>
    );
};

export default MyTask;