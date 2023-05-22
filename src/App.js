import React from 'react'
import Signup from './components/Signup'
import Navbars from './components/Navbars'
import Signin from './components/Signin'
import Account from './components/Account'

import { Routes, Route } from 'react-router-dom'

function App () {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold'>
        Welcome to the Firebase Authentication Demo
      </h1>
      <Routes>
        <Route path='/' element={<Navbars />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </div>
  )
}

export default App
