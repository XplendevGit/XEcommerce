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
        }, 1000); // Cambia este valor según lo que consideres adecuado
        return () => clearTimeout(timer);
    }, []);

  return (
    <secction className="py-48 md:py-8 md:h-[820px] relative overflow-hidden bg-primary/5 h-screen flex">
        <div className="container mx-auto">
            <div className="flex lg:flex-row flex-col items-center justify-between">
               {/* Primer Texto sobre Subtitulo */}
                <div className="w-full xl:max-w-[580px] md:h-[820px] flex flex-col justify-center items-center lg:items-start">
                    <h2 className="text-center xl:text-left text-primary">Profesional
                    </h2>
                    <h2 className="xl:text-5xl text2xl text-white" style={{ textShadow: '0px 0px 8px #252734' }}> 
                      EXCLUSIVE
                    </h2>
                    <h1 className="text-4xl xl:text-9xl" style={{ letterSpacing: '50px', textShadow: '8px 4px 4px rgba(0,0,0,0.5)' }}>
                      EXPERIENCES
                    </h1>
                    {/* Boton de Grupo */}
                    <div className="flex items-center gap-4 mx-auto xl:mx-0">
                      <button className="btn-primary">
                        Ver Todos los Productos
                      </button>
                 </div>
                </div>

                {/* Imagen */}
                
            <div 
            className="flex xl:w-[790px] xl:h-[780px] lg:w-[450px]">
                {loading ? (
                       <div className="inset-0 w-full flex items-center justify-center bg-opacity-50">
                            <Image src={'https://i.postimg.cc/sfK4D4mg/loading.gif'} width={640} height={640} alt="Loading" className="w-32 h-32" /> {/* Ajusta el tamaño según sea necesario */}
                        </div>
                ) : (
                    <Spline
                        className="h-auto w-auto"
                        scene="https://prod.spline.design/1lDq57lv7siCHhT1/scene.splinecode"
                        onLoad={handleLoad}
                    />
                )}
                </div>
            </div>
        </div>
    </secction>
  )
}

export default Portada