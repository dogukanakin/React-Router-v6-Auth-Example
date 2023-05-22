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
        Welcome to the Firebase Authentication Demo
      </h1>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />

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
