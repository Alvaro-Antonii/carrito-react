import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Carrito from './components/Carrito/Carrito.jsx'
import{createBrowserRouter , RouterProvider} from "react-router-dom";
import { useContext } from 'react'
import { dataContext } from './components/Contex/ContextData.jsx'





const routes = ([
  {
    path: "/",
    element: <App/> 
  },
  {
    path: "/carrito",
    element: <Carrito/>
  }
])




const router = createBrowserRouter (routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
