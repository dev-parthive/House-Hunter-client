import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';
import { AuthContext } from '../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';
const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let from = location?.state?.from?.pathname || '/';
    const {user, setUser} = useContext(AuthContext)
    const handleLogin = (event) =>{
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password);
        const url = `${import.meta.env.VITE_REACT_APP_API_URL}/login`
        fetch(url, {
            method: "POST", 
            headers: {
                'content-type': "application/json"
            }, 
            body: JSON.stringify({email, password})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data?.success == true){
                localStorage.setItem('House-Hunter-User', JSON.stringify(data))
                navigate(from, {replace: true})
                window.location.reload()
                toast.success("Login Successful")
            }else{
                toast.error(data?.message)
            }
        })
    }
    
    return (
        <div className='flex justify-center pt-8'>
            <div className='flex flex-col max-w-md p-6 
            rounded-md sm:p-10 bg-gray-100 text-gray-900             '>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Login</h1>
                    <p className='text-sm text-gray-400'>Login to access your account</p>
                </div>
                <form action="" onSubmit={handleLogin}
                    className='space-y-6 '>
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor="email" className='block mb-2 text-sm'>Email address</label>
                            <input type="email"
                                //to get the email address
                                // onBlur={(event)=>{setUserEmail(event.target.value)}}
                                name='email'
                                id='email'
                                required
                                placeholder='Enter your Email Here '
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className='block mb-2 text-sm'>Password</label>
                            <input name='password' id='password'
                                required
                                placeholder='*****'
                                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 text-gray-900 focus:outline-green-500 "
                                type="password" />

                        </div>
                    </div>
                    <div>
                        <PrimaryButton type="submit"
                            classes="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100">
                          Login

                        </PrimaryButton>
                    </div>

                </form>

                <div className='space-y-1'>
                        <button  className='text-xs hover:underline text-gray-400'>
                            Forgot password?
                        </button>
                </div>
                <p>Don't have an account yet? {' '}
                <Link to="/signup"
                className='hover:underline text-gray-600'>Sign up</Link>.</p>

            </div>

        </div>
    );
};

export default Login;