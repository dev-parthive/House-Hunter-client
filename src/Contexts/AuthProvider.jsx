import React, { useState } from 'react';
import { createContext } from 'react';
import { toast } from 'react-hot-toast';
export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const logOut = () =>{
        console.log("button is clicked");
        localStorage.removeItem('House-Hunter-User')
        window.location.reload()
        toast.success("Logout successfully")
        
}
const getCurrentUser = () =>{
    return localStorage.getItem('House-Hunter-User')
}
    const authInfo = {user, setUser, loading, setLoading, logOut, getCurrentUser}

    return (
        <AuthContext.Provider value={authInfo} >{children}</AuthContext.Provider>
    );
};

export default AuthProvider;