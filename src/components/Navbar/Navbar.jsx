import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';




const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const links=  navLinks.map(route => <Link key={route.id} route={route}></Link>)
                    
                

    return (
        <nav className='flex justify-between mx-6 pt-6'> 
            <span className='flex justify-between p-4' onClick={() => setOpen(!open)}>
                {
                    open ?
                        <X className='md:hidden'></X> :
                        <Menu className='md:hidden' />}
                <ul className={`md:hidden absolute duration-1000
                     ${open? "top-5": '-top-40'}
                     bg-blue-300`}>
                {links}
                </ul> 
                
            <h3 className='ml-3'>My Navbar</h3>
            </span>
            <ul className='hidden md:flex justify-between gap-8'>
                {
                    links
                }
            </ul>
            {/* <ul style={{display: "flex", justifyContent: "space-around"}}>
            {
                    navLinks.map(route => <li >
                        <a href={ route.path}>{ route.name}</a></li>)
            }
             </ul> */}
            
            <button>Sign In</button>
        </nav>
    );
};

export default Navbar;