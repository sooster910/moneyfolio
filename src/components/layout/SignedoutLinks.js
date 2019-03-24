import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      
     <NavLink to='/signup'>Signup</NavLink>
    <NavLink to='/signin'>Login</NavLink>
      
    </div>
  )
}

export default SignedOutLinks