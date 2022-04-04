import { Link } from 'react-router-dom'



import React from 'react'

const Navbar = ({ user }) => {
    const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <div className='navbar'>
      <ul className='navlist'>




        {user ? (
          <>
            <li className='list-item'><Link to='/' activeclassname='active' className='list-item'  > Home</Link></li>
            <li className='list-item'><Link to='/profile' activeclassname='active' className='list-item'  > Profile</Link></li>
            <li className='list-item' onClick={logout}>Logout</li>
          </>
        ) : (
          <>
            <li className='list-item'><Link to='/' activeclassname='active' className='list-item'  > Home</Link></li><li className='list-item'><Link to='/login' activeclassname='active' className='list-item'  > Login</Link></li>
          </>)}






      </ul>



    </div>
  )
}

export default Navbar

