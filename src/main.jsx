import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import './App.css'
import routes from './routes/route'
import AuthProvider from './components/provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={routes}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
