import React from 'react';

const Link = ({route}) => {
    // console.log(route)
    return (
        <li className='px-4 m-1 hover:bg-white hover:text-black'>
            <a href={route.path}>{route.name}</a>
            
        </li>
        
    );
};

export default Link;