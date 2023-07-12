import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import CreateUser from "../pages/CreateUser/CreateUser";
import Dashboard from "../pages/Dashboard/Dashboard";
import Update from "../pages/Update/Update";
import User from "../pages/User/User";

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
                        element:<Update></Update>
                  },
                  {
                        path:'view/:id',
                        element:<User></User>
                  }
                  
            ]
      }
])

export default router