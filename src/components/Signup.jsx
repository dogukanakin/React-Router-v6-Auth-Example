import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const { createUser } = require('../firebase')

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try {
      await createUser(email, password)
      navigate('/account')
    } catch (err) {
      setError(err.message)
      console.log(err.message)
    }
  }

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <h1 className='text-2xl  font-bold py-2'>Sign in to Your Account</h1>
      <p className='py-2'>
        Dont have an account?{' '}
        <Link to='/signin' className='text-blue-500'>
          Sign up
        </Link>
      </p>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onchange={e => setEmail(e.target.value)}
            type='text'
            placeholder='Email'
            className='border-2 border-gray-300 p-2 rounded-md w-full my-2'
          />
          <input
            onchange={e => setPassword(e.target.value)}
            type='password'
            placeholder='Password'
            className='border-2 border-gray-300 p-2 rounded-md w-full my-2'
          />
          <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
            Sign Up
          </button>{' '}
          {error && <p className='text-red-500'>{error}</p>}
        </form>
      </div>
    </div>
  )
}

export default Signup
