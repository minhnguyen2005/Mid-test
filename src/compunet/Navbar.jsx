import React from 'react'
import Search from './Search'
const Navbar = () => {
  return (
    <div className='container'>
        <div className='logo'>
            Anonime
        </div>
        <div className='page'>
            <a className='home'>Home</a>
            <a className='list'>List anime</a>
        </div>
        
            <Search/>
        
        
    </div>
    
  )
}

export default Navbar