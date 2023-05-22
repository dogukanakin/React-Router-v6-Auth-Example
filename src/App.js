import React from 'react'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Account from './components/Account'
import Navbar from './components/Navbars'
import { AuthContextProvider } from './components/context/AuthContext'
import ProtectedRoute from './components/ProctedRoute'
import { Routes, Route } from 'react-router-dom'
import PageNotFound from './components/PageNotFound'

function App () {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold'>
        React Router v6 Auth Example
      </h1>

      <AuthContextProvider>
        <Navbar />
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
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App
