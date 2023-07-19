import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Router.jsx'
import './App.css'
import {AuthContext} from './Contexts/AuthProvider.jsx'

function App() {
  const {user, setUser, getCurrentUser} = useContext(AuthContext)
  useEffect(()=>{
    const user = getCurrentUser()
    if(user){
      setUser(user)
    }
  }, [])
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App
