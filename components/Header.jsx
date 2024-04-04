'use client'
import React from 'react'
import Link from 'next/link'
import Nav from './Nav'

import CartSlidebar from '@/components/cart/CartSlidebar'

import Image from 'next/image'

import { CgShoppingBag } from 'react-icons/cg'
import { useShoppingCart } from 'use-shopping-cart'

import { LuShoppingCart } from "react-icons/lu";


const Header = () => {
  const { cartCount, handleCartClick } = useShoppingCart();
  return (
    <header className="bg-fondoterciary shadow-lg sticky top-0 py-6 z-40">
        <div className="container mx-auto flex justify-between items-center">
            {/* Container Logo */}
            <div className="flex w-[150px] h-auto">
            <Link href='/'>
                <Image 
                alt='Imagen' 
                src="https://i.postimg.cc/P5qXwVY7/xcommerce-logo-transparent.png" 
                className="w-auto h-auto" 
                layout='fit'
                width={150}
                height={150}
                >
                </Image>
            </Link>
            </div>

           {/* Container Nav */}
            <div className="flex w-full mx-auto items-center justify-center">
                <Nav/>
            </div>

            {/* Container Shopping Cart*/}
            <div onClick={()=> handleCartClick()}
                 className="relative cursor-pointer">
                       <LuShoppingCart className="w-[30px] h-[30px] text-white"/>
                    <div className="bg-primary w-[18px] h-[18px] absolute -right-1 -bottom-1 rounded-full text-white flex items-center justify-center text-sm font-medium">
                        <p className="">
                        {cartCount}
                        </p>
                   </div>
                </div>
                <CartSlidebar />
        </div>
    </header>
  )
}

export default Header