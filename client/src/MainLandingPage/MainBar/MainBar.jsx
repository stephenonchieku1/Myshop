
import React from 'react'
import { Link } from 'react-router-dom'

const MainBar = () => {
  return (
    <header className='header'>
      <div>
        <Link className='links2' to='/'>
          MyShop.com
        </Link>
      </div>

      <nav className='navbar'>
        <ul>
        <Link className='links' to='/mlog-in'>
                Merchant
        </Link>
       <Link className='links' to='/alog-in'>
                 Admin
         </Link>
         
          <Link  className='links' to='/clog-in'>
                Clerk
         </Link>  
         <Link  className='links' to='/register'>
              Register
         </Link>         
                 
          
        </ul>
      </nav>
    </header>
  )
}

export default MainBar
