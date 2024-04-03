'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';

const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Productos', path: '/Productos' },
    { name: 'Nosotros', path: '/Nosotros' },
  ]

const Nav = () => {
  const [selectedLink, setSelectedLink] = useState(null);


  return (
    <nav className='flex md:gap-[36px] space-x-2'>
      {links.map((link, index) => (
        <Link 
          href={link.path} 
          key={index} 
          className={`cursor-pointer ${selectedLink === link.path ? 'text-primary' : 'text-white'}`}
          onClick={() => setSelectedLink(link.path)}
        >
          <h2 className="text-xs md:text-base">{link.name}</h2>
        </Link>
      ))}
    </nav>
  )
}

export default Nav