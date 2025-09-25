import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";
import App from "../App";
import Historico from "../pages/Historico";
import Integrantes from "../pages/Integrantes";
import Cadastro from "../pages/Cadastro";
import Telemedicina from "../pages/Telemedicina";
import Faq from "../pages/Faq";
import Contato from "../pages/Contato";

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
    },
    {
        path: '/integrantes',
        element: <Integrantes />
    },
    {
        path: '/cadastro',
        element: <Cadastro />
    },
    {
        path: '/telemedicina',
        element: <Telemedicina />
    },
    {
        path: '/faq',
        element: <Faq />
    },
    {
        path: '/contato',
        element: <Contato />
    }
    ]
  }
   
]) 

  
      
    
  
