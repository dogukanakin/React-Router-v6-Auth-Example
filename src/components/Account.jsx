import React from 'react'
import { useNavigate } from 'react-router-dom'

const Account = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/signin') // Navigate to the signin page
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Account
