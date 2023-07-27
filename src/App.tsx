import { useContext, useEffect,  } from 'react'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Router.jsx'
import './App.css'
import {AuthContext} from './Contexts/AuthProvider.jsx'

function App() {
  const {setUser, getCurrentUser} = useContext(AuthContext)
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