import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './assets/styles/main.scss'

import App from './pages/App'
import Error from './pages/Error'
import Home from './pages/Home'
import Employees from './pages/Employees'

const router = createBrowserRouter([
  {
    path: '/',
    element: <><App><Home /></App></>,
    errorElement: <Error />,
  },
  {
    path: '/employees',
    element: <><App><Employees /></App></>,
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
