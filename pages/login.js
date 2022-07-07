import React from 'react';
import Image from 'next/image';
import Nav from './components/Nav.js'
import NavItem from './components/NavItem.js'

const LEFT = 1;
const RIGHT = 2;
const CENTER = 0;

const Home = () => {
  return <div>
    <div className='flex mx-6 items-center my-2'>
      <Image src="/logoAI.png" height="50px" width="50px"></Image>
      <Nav>
        <NavItem rounded={LEFT} href="/home">Home</NavItem>
        <NavItem rounded={CENTER} href="/home">Projects</NavItem>
        <NavItem rounded={CENTER} href="/home">Data</NavItem>
        <NavItem rounded={RIGHT} href="/login">LogIn</NavItem>
      </Nav>
    </div>
    <div className='h-screen bg-red-200 flex m-6'>
        <div className='w-1/3 bg-green-200'>
          Hola
        </div>
        <div className='w-2/3  bg-blue-200'>
          <div className='bg-purple-500 flex flex-wrap items-center'> 
          center 
          <div>cuarto </div>
          </div>
        </div>
    </div>

  </div>
}

export default Home;