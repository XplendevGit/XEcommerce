import React from 'react'

import style from './footer.module.css'

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-full h-[250px] md:h-[450px] lg:h-[630px] xl:h-[780px] bg-fondoterciary'>
{/* Contenedor Principal */}
      <div className={`w-full h-full flex lg:pt-24 md:pt-10 pt-4 bg-fondoprimary ${style['contenedor-footer']}` }>

       {/* Div Promocion Xplendev */}
        <div className={`w-full h-full flex border-[1px] border-secondary bg-white rounded-2xl ${style['footer-1']}` }>

        </div>

        {/* Div contenido redes sociales news email */}
        <div className={`w-full h-full flex bg-secondary container ${style['footer-4']}` }>
           
           <div className="flex flex-grow w-full h-full py-4">

      {/* Div redes sociales */}
            <div className="w-full flex flex-col object-center items-center">
            
            <h2 className="text-white">
              Síguenos!
            </h2>

            <div className="flex space-x-2">
              <FaWhatsapp className="h-6 w-6 md:w-8 md:h-8 text-[#59F676] cursor-pointer" />
              <FaInstagram className="h-6 w-6 md:w-8 md:h-8 text-[#B63773] cursor-pointer" />
              <FaSquareFacebook className="h-6 w-6 md:w-8 md:h-8 text-[#3A5898] cursor-pointer" />
            </div>

          </div>

      {/* Div email */}
         <div className="w-full h-full flex flex-row flex-wrap justify-center items-center bg-blue-400">
          
             <button className="btn btn-primary">
               
             </button>

            <button className="btn btn-primary">

             </button>

            </div>

           </div>
        </div>

        {/* Div bootom footer */}
        <div className={`w-full h-full flex bg-secondary border-t-[1px] border-t-white/50 ${style['footer-3']}` }>

          <div className="flex justify-center items-center text-center w-full">
                 <h2 className="text-white">
                  2024 Xplendev All Rigths Reserved
                 </h2>
          </div>

        </div>

         {/* Div BackGround */}
        <div className={`w-full h-full flex bg-secondary ${style['footer-2']}` }>

        </div>

      </div>
        
    </div>
  )
}

export default Footer