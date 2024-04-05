"use client"
import { useState, useEffect } from 'react';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Spline from '@splinetool/react-spline';

import { Button } from "@/components/ui/button"

import style from './portada.module.css'

const Portada = () => {
    const [loading, setLoading] = useState(true);

    const handleLoad = () => {
        setLoading(false);
    };

    // Al cargar el componente, espera un breve tiempo antes de mostrar la imagen
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, ); // Cambia este valor según lo que consideres adecuado
        return () => clearTimeout(timer);
    }, []);

  return (
    <div className="w-full max-h-screen bg-fondoprimary container">
    {/* DIV Central */}
      <div className={`w-full h-full flex lg:py-24 md:py-10 py-4 ${style['contenedor-portada']}` }>
      {/* DIV 1 */}
        <div className={` ${style['portada-1']}` }>
          
          <div className="w-full h-full flex flex-col justify-center lg:pb-32 space-y-1">
             {/* Textos */}
             <h2 className="text-xl md:text-2xl text-primary">Profesional</h2>
             <h2 className="text-3xl md:text-4xl text-white" style={{ textShadow: '0px 0px 8px #252734' }}>E-COMMERCE</h2>
             <h1 className="text-5xl md:text-6xl lg:text-7xl xl:tracking-[0.4em]" style={{ textShadow: '8px 4px 4px rgba(0,0,0,0.5)' }}>EXPERIENCE</h1>

            {/* Boton de Grupo */}
            <div className="flex items-center gap-4 pt-4 mx-auto sm:mx-0">
              <Link href='/detalleproductos'>
              <button className="btn-primary">
                   Ver Todos los Productos
                </button>
              </Link>

            </div>
          </div>

        </div>

       {/* DIV 2 */}
        <div className={`z-10 flex md:justify-end items-center justify-center ${style['portada-2']}` }>
                {/* Imagen */}
                
                <div 
            className="flex w-auto h-[340px] md:w-[450px] md:h-[580px] xl:w-full xl:h-[780px] xl:pb-12 justify-end items-center">
                {loading ? (
                       <div className="inset-0 w-full flex items-center justify-center bg-opacity-50">
                            <Image src={'https://i.postimg.cc/sfK4D4mg/loading.gif'} width={640} height={640} alt="Loading" className="w-32 h-32" /> {/* Ajusta el tamaño según sea necesario */}
                        </div>
                ) : (
                  <div className="flex w-full h-[400px] md:w-[220px] md:h-[520px] lg:w-[320px] lg:h-[620px] xl:w-full xl:h-[850px] xl:pl-24">
                  {/* Objeto 3d Spline */}
                 <Spline
                        className="h-full w-full"
                        priority
                        scene="https://prod.spline.design/1lDq57lv7siCHhT1/scene.splinecode"
                        onLoad={handleLoad}
                    />
                  </div>

                )}
                </div>

        </div>

      </div>

    </div>
  )
}

export default Portada