import React from 'react'
import ReactDOM from 'react-dom/client'
import App from  './App.tsx'
import { Toaster } from 'react-hot-toast'
import './index.css'
// import AuthProvider from './Contexts/AuthProvider.jsx'
import AuthProvider from './Contexts/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
    <Toaster/>
    <App />
    </AuthProvider>
  </React.StrictMode>,
)