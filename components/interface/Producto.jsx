"use client"

import { urlFor } from '@/sanity/lib/client'
import Image from 'next/image'
import Link from 'next/link'
import { CgEye, CgShoppingBag } from 'react-icons/cg'

import { FaEye } from "react-icons/fa";

import React from 'react'
import AddToCart from '../cart/AddToCart'


const productoHeight = 550;
const productoWidth = 550;

const Producto = ({ producto }) => {
    const popularProductosCat = producto.categorias.find(
        (producto)=> producto.nombre === 'popular')

    console.log(popularProductosCat)

    
      // Formatea el precio con un punto como separador de miles
  const formatPrice = (price) => {
    return price.toLocaleString('es-CL');
  };

  return (
    <div className="group">
        <div className=" bg-fondosecondary lg:max-h-auto mb-5 p-4 overflow-hidden relative">
            <div className="w-full h-full group-hover:bg-primary-10 transition-all duration-300 flex justify-center items-center">
                {/* Badge */}
                {popularProductosCat && (
                    <div className="absolute top-10 -left-8 bg-primary text-white px-4 text-sm uppercase font-medium transform -rotate-90 transition-all duration-300">
                        Nuevo!
                    </div>
                )}
                <Image 
                className='lg:max-w-auto max-w-[240px]'
                src={producto.imagenes && producto.imagenes[0] ? urlFor(producto.imagenes[0]).url() : '/https://i.postimg.cc/ZR1gbyZ3/loading.png'}
                width={productoWidth}
                height={productoHeight}
                alt='Imagen'
                />
            </div>
            {/* btn group */}
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">

            
            {/* AddToCart */}
            <AddToCart 
                id={producto._id}
                nombre={producto.nombre}
                currency={"USD"}
                descripcion={producto.descripcion}
                imagenes={producto.imagenes}
                valor={producto.valor}
                btnStyles='btn btn-primary'
                icon={<CgShoppingBag />}
                />
                <Link href={`/detalleproductos/${producto.slug}`}>
                    <button className="btn-icon btn-primary">
                        <FaEye />
                    </button>
                </Link>
            </div>
        </div>
        {/* Detalles del Producto */}
        <div className="w-full h-full flex flex-col text-center justify-center mb-10">

        <h1 className="text-lg">
        {producto.nombre}
            
        </h1>
        <h3 className="mb-1 text-secondary">{producto.descripcion}</h3>
        <h1 className="text-xl text-primary">
            ${formatPrice(producto.valor)}
        </h1>

        </div>


    </div>
  )
}

export default Producto