
import Image from 'next/image';
import Nav from '../components/Nav';
import NavItem from '../components/NavItem';

import Menu from '../components/menu';
import MenuItem from '../components/MenuItem';

const LEFT = 1;
const RIGHT = 2;
const CENTER = 0;

export default function DataProcess() {
    return (
        <div className="h-screen ">
            <div className='flex mx-6 items-center my-2 '>
                <Image src="/logo1.svg" height="50px" width="140px" ></Image>
                <Nav>
                    <NavItem rounded={LEFT} href="/">Home</NavItem>
                    <NavItem rounded={CENTER} href="/project">Projects</NavItem>
                    <NavItem rounded={CENTER} href="/data">Data</NavItem>
                    <NavItem rounded={CENTER} href="/signin">Sign In</NavItem>
                    <NavItem rounded={RIGHT} href="/login">Log In</NavItem>
                </Nav>
            </div>

            <div className=' h-screen border-2 border-gray-500 m-6 px-2 rounded flex flex-col '>
                <Menu>
                    <MenuItem rounded={LEFT} >Data</MenuItem>
                    <MenuItem rounded={CENTER} >Algorithms</MenuItem>
                    <MenuItem rounded={CENTER} >Process</MenuItem>
                    <MenuItem rounded={RIGHT} >Results</MenuItem>
                </Menu>

                <div className=' bg-blue-200 '>
                    Work area
                </div>

            </div>
        </div>
    );
}