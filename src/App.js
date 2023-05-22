import React from 'react'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Account from './components/Account'
import { AuthContextProvider } from './components/context/AuthContext'
import ProtectedRoute from './components/ProctedRoute'
import { Routes, Route } from 'react-router-dom'

function App () {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold'>
        React Router v6 Auth Example
      </h1>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App
