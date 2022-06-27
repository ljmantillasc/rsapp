import React from 'react';
import Image from 'next/image';
import Nav from './Nav.js'
import NavItem from './NavItem.js'

const Home = () => {
  return <div>
    <div className=' bg-cyan-500 mx-6'>
      <Nav>
        <img src="/logoAI.png" className='flex-none w-16 h-16 m-2 ' />
        <a className='flex-auto w-30'></a>
        <NavItem href="/home">Home</NavItem>
        <NavItem href="/home">Projects</NavItem>
        <NavItem href="/home">Data</NavItem>
        <NavItem href="/login">LogIn</NavItem>
      </Nav>
    </div>
    <div>
        
    </div>

  </div>
}

export default Home;