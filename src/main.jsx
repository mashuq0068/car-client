import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import AuthProvider from './Providers/Authprovider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' max-w-[90%] mx-auto'>
    <AuthProvider>
    <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
    </AuthProvider>
  </div>,
)
