import React from 'react';
import Image from 'next/image';
import Nav from './components/Nav.js'
import NavItem from './components/NavItem.js'

const LEFT = 1;
const RIGHT = 2;
const CENTER = 0;

const Home = () => {
  return <div>
    <div className='flex mx-6 items-center my-2 '>
      <Image src="/logo1.svg" height="50px" width="140px" ></Image>
      <Nav>
        <NavItem rounded={LEFT} href="/">Home</NavItem>
        <NavItem rounded={CENTER} href="/project">Projects</NavItem>
        <NavItem rounded={CENTER} href="/modAI/data">Data</NavItem>
        <NavItem rounded={CENTER} href="/signin">Sign In</NavItem>
        <NavItem rounded={RIGHT} href="/login">Log In</NavItem>
      </Nav>
    </div>
    <div className='h-[calc(100vh_-_80px)] flex flex-col items-center justify-center '>
      <div className='flex flex-col items-center justify-center border-4 rounded shadow-lg '>
        <div className='mt-8 w-full flex justify-between'>
          <label className='mx-4 w-30 text-2xl '>User name</label>
          <input className='mr-4 border border-gray-400 rounded ' type="text" ></input>
        </div>
        <div className=' mt-8 w-full flex justify-between'>
          <label className='mx-4 w-30 text-2xl '>Password</label>
          <input className='mr-4 border border-gray-400 rounded ' type="password"></input>
        </div>
        <div className='w-full mb-8'>
          <a className='text-left font-thin text-sm ml-5 text-blue-500 hover:text-blue-800'> forgot my password? </a>
        </div>
        <button className=' bg-blue-400 rounded w-40 mb-8 py-2 text-2xl hover:bg-blue-600 ' >Login</button>
      </div>
    </div>

  </div>
}

export default Home;