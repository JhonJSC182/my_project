import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'

import RootLayout from './layouts/RootLayout'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
