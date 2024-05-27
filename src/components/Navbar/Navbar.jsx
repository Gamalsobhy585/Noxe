import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(    {userData,logOut}) {
  return (




    <nav className='p-2 d-flex justify-content-between align-items-center'>
     <div className="left-nav flex-md-row flex-column  d-flex align-items-center">
      <h1 className='m-0 pe-3'><Link className='text-decoration-none ' to='/'>Noxe</Link></h1>




      {userData?
      <ul className='list-unstyled d-flex flex-md-row flex-column m-0 align-items-center'>
        <li className='px-2 ' > <Link className='text-decoration-none ' to='/'>Home</Link>  </li>
        <li className='px-2 '> <Link className='text-decoration-none ' to='movies'>Movies</Link>  </li>
        <li className='px-2 '> <Link className='text-decoration-none ' to='tv'>Tv</Link>  </li>
        <li className='px-2 '> <Link className='text-decoration-none ' to='people'>People</Link>  </li>
      </ul>:''}








     </div>










     <div className="right-nav flex-md-row flex-column  d-flex align-items-center">
      <div className="social-media cursor-pointer d-flex align-items-center m-0">
        <i className='fab mx-1 fa-facebook'></i>
        <i className='fab mx-1 fa-instagram'></i>
        <i className='fab mx-1 fa-twitter'></i>
        <i className='fab mx-1 fa-spotify'></i>
        <i className='fab mx-1 fa-youtube'></i>
        <ul className='list-unstyled flex-md-row flex-column d-flex m-0 align-items-center'>
        {userData? <>
        
          <li onClick={logOut} className='px-2 cursor-pointer'><span>LogOut</span></li>
          <li className='px-2 '><Link className='text-decoration-none ' to='profile'>Profile</Link></li>

        
        </>:


        <>
        
<li className='px-2 '><Link className='text-decoration-none ' to='login'>Login</Link></li>
    <li className='px-2 '><Link className='text-decoration-none ' to='/register'>Register</Link></li>

        </>
        
        
        }


    
    
        </ul>
      </div>
     </div>
    </nav>
  )
}
