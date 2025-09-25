import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";
import App from "../App";
import Historico from "../pages/Historico";

export const routes = createBrowserRouter ([
  {
  path: "/",
  element: <App />,
  errorElement: <Error />,
  children: [
    {
      path: "/",
      element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/historico',
        element: <Historico />
    }

    ]
  }
   
]) 

  
      
    
  
