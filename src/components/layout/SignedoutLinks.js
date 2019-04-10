import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="navbar-nav">
        {/* <li className="nav-item">
          <NavLink to='/signup' className="nav-link">Signup</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink to='/' className="nav-link">Login</NavLink>
        </li>
      </ul>
    </div>

  )
}

export default SignedOutLinks