
import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedoutLinks';


const Navbar = () => {
  return (
   
      <div>
        <Link to='/'>Moneyfolio</Link> 
        <SignedInLinks />
        <SignedOutLinks/>
      </div>
 
  )
}

export default Navbar