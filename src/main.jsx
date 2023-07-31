import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import{createBrowserRouter , RouterProvider} from "react-router-dom";
import { useContext } from 'react'
import { dataContext } from './components/Contex/ContextData.jsx'





const routes = ([
  {
    path: "/",
    element: <App/> 
  }
  
])




const router = createBrowserRouter (routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
