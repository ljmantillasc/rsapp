import React, { useEffect } from 'react'
import Image from 'next/image'
import Nav from './components/Nav'
import NavItem from './components/NavItem'
import Link from 'next/link'
import ServiceItem from './components/serviceItem'
import ProjectItem from './components/ProjectsItem'
import { Layout } from './components/Layout'

const LEFT = 1
const RIGHT = 2
const CENTER = 0

// useEffect( () =>{
//   console.log("hello")
// }, [] )

const Home = () => {
  return (
    <Layout>
      <div className="flex mx-6 items-center my-2 ">
        <Image src="/logo1.svg" height="50px" width="140px"></Image>
        <Nav>
          <NavItem rounded={LEFT} href="/">
            Home
          </NavItem>
          <NavItem rounded={CENTER} href="/project">
            Projects
          </NavItem>
          <NavItem rounded={CENTER} href="/modAI/data">
            Data
          </NavItem>
          <NavItem rounded={CENTER} href="/signin">
            Sign In
          </NavItem>
          <NavItem rounded={RIGHT} href="/login">
            Log In
          </NavItem>
        </Nav>
      </div>
      <section>
        <div className="h-[calc(100vh_-_80px)] flex flex-row items-center justify-center mx-6 bg-center bg-no-repeat bg-[length:400px] bg-pattern-4">
          <div className="flex flex-col items-center justify-center mx-10 bg-blue-100/70">
            <div className="text-4xl text-center m-6">
              Welcome to my app, here you can use some Atificial Inteligence
              models applyed to labeling images.
            </div>
            <p className="">Hola miss Pilar</p>
            <button className="m-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {' '}
              Get started
            </button>
          </div>
        </div>
      </section>
      <section className="m-6">
        <div className="w-full bg-blue-900">
          <h2 className="text-center text-4xl font-bold text-white py-6">
            Explore our solutions
          </h2>
        </div>
        <div>
          <h3 className="text-left text-2xl text-white pb-2">Por sector</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <ServiceItem
            title={'Common'}
            service={'monitoring 1-10 ha'}
            description={
              'A monitoring service of take images and process using simple methods.'
            }
            tasks={[
              { id: 1, description: 'Taking images' },
              { id: 2, description: 'Minimal funcionalities' },
              { id: 3, description: 'processing time' },
            ]}
          />
          <ServiceItem
            title={'Startups'}
            service={'monitoring 10-100 ha'}
            description={
              'A monitoring service of take images and process using artificial inteligence arquitectures.'
            }
            tasks={[
              { id: 1, description: 'Taking images' },
              { id: 2, description: 'Medium funcionalities' },
              { id: 3, description: 'Processing time and AI segmentation' },
            ]}
          />
          <ServiceItem
            title={'Enterprises'}
            service={'monitoring 100-more ha'}
            description={
              'A monitoring service, include drones and artificial inteligence arquitectures'
            }
            tasks={[
              { id: 1, description: 'Taking images by drones' },
              { id: 2, description: 'Full funcionalities' },
              {
                id: 3,
                description: 'processing time and trained AI arquitectures',
              },
            ]}
          />
        </div>
      </section>
      <section className="m-6">
        <div className="w-full bg-blue-900">
          <h2 className="text-center text-4xl font-bold text-white py-6">
            Our actual projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ProjectItem
            image="/rs_image_1.svg"
            project="Classification"
            description="A set of networks which process satellite images."
            algorithms="CNN, Y-net"
            key={1}
          />
          <ProjectItem
            image="/rs_image_2.svg"
            project="Lakes identification"
            description="A set of networks which process satellite images to find lakes location."
            algorithms="Y-net"
            key={2}
          />
          <ProjectItem
            image="/rs_image_3.svg"
            project="Satellite images binarization"
            description="A neural network to binarise satellite images and identify glaciers."
            algorithms="Autoencoder, CNN, and Y-net"
            key={3}
          />
          <ProjectItem
            image="/rs_image_4.svg"
            project="Maps generation"
            description="A set of networks to classify neural networks."
            algorithms="CNN"
            key={4}
          />
          <ProjectItem
            image="/rs_image_5.svg"
            project="Lakes identification"
            description="A set of networks which process satellite images to find lakes borders."
            algorithms="Autoencoder, CNN, and Y-net"
            key={5}
          />
          <ProjectItem
            image="/rs_image_6.svg"
            project="Areas identification"
            description="A set of networks which generate a segmentation of satellite images."
            algorithms="Autoencoder, CNN, and Y-net"
            key={6}
          />
        </div>
      </section>
      <footer className="m-6">
        © 2022, Remote Sensing AI, Inc. Todos los derechos reservados.
      </footer>
    </Layout>
  )
}

export default Home
