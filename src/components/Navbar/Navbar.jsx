import React from 'react';
import Link from './Link';

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
    
    return (
        <nav>
            
            <ul className='flex justify-evenly'>
                {
                    navLinks.map(route => <Link key={route.id} route={route}></Link>)
                    
                }
            </ul>
            {/* <ul style={{display: "flex", justifyContent: "space-around"}}>
            {
                    navLinks.map(route => <li >
                        <a href={ route.path}>{ route.name}</a></li>)
            }
             </ul> */}
        </nav>
    );
};

export default Navbar;