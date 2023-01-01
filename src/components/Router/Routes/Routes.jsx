import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main/Main";
import Addtask from "../../AddTask/Addtask";
import Error from "../../Error/Error";
import Home from "../../Home/Home";
import MyTask from "../../MyTask/MyTask";
// import ComplpletedTask from "../../CompletedTask/CompletedTask";
import Login from "../../Login/Login";
import SignUp from "../../SignUp/SignUp";
import Private from "../Private/Private";
import ComingSoon from "../../Coming Soon/ComingSoon"
const router = createBrowserRouter([
    {
        path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/add-a-task",
                element:<Private><Addtask></Addtask></Private>
            },
            {
                path: "/my-tasks/:email",
                loader: async ({ params }) => {
                    // console.log(params);
                    return fetch(
                      `https://taskey-server-sarwarhridoy4.vercel.app/my-task/${params.email}`
                    );
                  },
                element:<Private><MyTask></MyTask></Private>
            },
            {
                path: "/completed-task",
                element:<ComingSoon></ComingSoon>
            },
            {
                path: "/login",
                element:<Login></Login>
            },
            {
                path: "/signup",
                element:<SignUp></SignUp>
            },
    ]
    }
  ]);
  
  export default router;