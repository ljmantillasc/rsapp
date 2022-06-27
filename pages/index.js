import React from 'react';
import Image from 'next/image'
import Nav from './Nav.js'
import NavItem from './NavItem.js'
import Link from "next/link";

const Home = () => {
  return <div>
    <div className=' bg-cyan-500 mx-6'>
      <Nav>
        <img src="/logoAI.png" className='flex-none w-16 h-16 m-2 ' />
        <a className='flex-auto w-30'></a>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/home">Projects</NavItem>
        <NavItem href="/home">Data</NavItem>
        <NavItem href="/login">LogIn</NavItem>
        <NavItem href="/signin">Sign In</NavItem>
      </Nav>
    </div>

    <div className="h-screen flex flex-row items-center justify-center mx-6 bg-pattern-2">
      <div className='flex flex-col items-center justify-center mx-10 bg-blue-100/70'>
        <div className="text-4xl text-center m-6">Welcome to my app, here you can use some Atificial Inteligence models applyed to labeling images.</div>
        <p className=''>This app will unblock all your creativity diring image procesing.</p>
        <button className='m-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> Get started</button>
      </div>
    </div>
    
    {/* segunda parte  */}

    <div className='h-screen text-center mx-6 '>
      <div className='flex flex-col justify-center my-2 h-40'>
        <div className='text-2xl text-center'>
          Our trained trained models take simple images and identity some interest elements.
        </div>
      </div>
      <div className='flex '>
        <div className='w-1/3 '>
          <img src='./imagen1.jpg' className='w-full  rounded'></img>
        </div>
        <div className='w-1/3 flex justify-center items-center'>
          <div className='m-auto mx-6'>
            We have aviabilable some precision methodologies which allow you get useful reslts. 
              We have trained anough models to achive your particular goals.
          </div>
        </div>
        <div className='w-1/3 '>
          <img src='./image.png' className='w-full  rounded'></img>
        </div>
      </div>
    </div>

    <div className='h-screen flex flex-col-reverse bg-green-100 mx-6 '>
      <div className='bg-gray-900'>
        <footer className='text-white text-center'>Copyright &copy; airs.com. </footer>
      </div>
      <div>
        tercera parte 
      </div>
    </div>
    
  </div>
}

export default Home;