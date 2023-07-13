import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import CreateUser from "../pages/CreateUser/CreateUser";
import Dashboard from "../pages/Dashboard/Dashboard";
import Update from "../pages/Update/Update";
import User from "../pages/User/User";
import Contact from "../pages/Contact/Contact";

const router=createBrowserRouter([
      {
            path:'/',
            element:<Main></Main>,
            children:[

                  {
                        path:'/',
                        element:<Home></Home>
                  },
                  {
                        path:'dashboard',
                        element:<Dashboard></Dashboard>
                  },
                  {
                        path:'create',
                        element:<CreateUser></CreateUser>
                  },
                  {
                        path:'update/:id',
                        element:<Update></Update>,
                        loader:({params})=>fetch(`https://user-management-server-flax.vercel.app/users/${params.id}`)
                  },
                  {
                        path:'view/:id',
                        element:<User></User>
                  },
                  {
                        path:'contact',
                        element:<Contact/>
                  }
                  
            ]
      }
])

export default router