import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from './context/AuthContext'
import { auth, provider } from './context/firebase'
import { signInWithPopup } from 'firebase/auth'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { signIn } = UserAuth()
  const [values, setValues] = useState('')

  const handleClick = async () => {
    try {
      await signInWithPopup(auth, provider)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }



  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
        <h1 className='text-2xl font-bold py-2'>Sign in to your account</h1>
        <p className='py-2'>
          Don't have an account yet?{' '}
          <Link to='/signup' className='text-blue-500'>
            Sign up.
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='py-2 font-medium'>Email Address</label>
          <input
            onChange={e => setEmail(e.target.value)}
            className='border-2 border-gray-300 p-2 rounded-md w-full my-2'
            type='email'
          />
        </div>
        <div>
          <label className='py-2 font-medium'>Password</label>
          <input
            onChange={e => setPassword(e.target.value)}
            className='border-2 border-gray-300 p-2 rounded-md w-full my-2'
            type='password'
          />
        </div>
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
          Sign In
        </button>
      </form>

      <div className='flex justify-center items-center'>
        <button
          onClick={handleClick}
          className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'
        >
          Sign In with Google
          
        </button>

      </div>
    </div>
  )
}

export default Signin


// <button
//           onClick={handleClick}
//           className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'
//         >
//           Sign In with Google
          
//         </button>


// add this button google svg png

// <button
//           onClick={handleClick}
//           className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'
//         >
//           Sign In with Google

//         </button>
//         <div className='flex justify-center items-center'>
// <button