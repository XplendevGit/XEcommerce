'use client'
import React from 'react'
import Link from 'next/link'
import Nav from './Nav'

import { CgShoppingBag } from 'react-icons/cg'
import { useShoppingCart } from 'use-shopping-cart'

const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 py-8 z-40">
        <div className="container mx-auto flex justify-between items-center bg-red-400">
            <Link href='/'>
                <h1 className="text-[26px]">
                    Logo
                </h1>
            </Link>
            <div className="flex items-center gap-[26px] bg-blue-400">
                <Nav containerStyles="flex gap-[36px]"/>
                <div
                 className="relative cursor-pointer bg-gray-400">
                    
                    <div className="bg-primary w-[18px] h-[18px] absolute -right-1 -bottom-1 rounded-full text-white flex items-center justify-center text-sm font-medium">
                        
                   </div>
                   <p>Carrito de Compras</p>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header