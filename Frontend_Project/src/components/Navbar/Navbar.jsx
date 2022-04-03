import {Link} from 'react-router-dom'



import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <ul className='navlist'>
           <li className='list-item'><Link to='/' activeclassname='active' className='list-item'  > Home</Link></li>
           <li className='list-item'><Link to='/login' activeclassname='active' className='list-item'  > Login</Link></li>
           <li className='list-item'><Link to='/profile' activeclassname='active' className='list-item'  > Profile</Link></li>



        </ul>  



    </div>
  )
}

export default Navbar

