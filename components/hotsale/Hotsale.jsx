import React from 'react'

import { client } from '@/sanity/lib/client'

import HotsaleCarousel from './HotsaleCarousel';

//get data of popular products
const getData = async () => {
    const query = `*[_type == 'producto' && references(*[_type == 'categoria' && nombre == 'popular']._id, categorias)]{
        _id,
        nombre,
        descripcion,
        imagenes,
        valor,
        valor_id,
        "slug": slug.current,
        "categorias": categorias[]-> {
          nombre
        }  
      }`;
      const data = await client.fetch(query);
      return data;
}

const Hotsale = async () => {
    const producto = await getData()
    console.log(producto)
  return (
    <div className="w-full h-screen container my-24">
        {/* Contenedor Principal */}
        <div className="w-full h-full flex flex-col">

            {/* Div 1 */}
            <div className="w-full h-full text-center flex flex-col space-y-2 ">
            
              <h1 className="">
              Nuevos Productos
              </h1>

              <h2 className="text-secondary">
              Escoje el tuyo y llévatelo antes de que se agote!
              </h2>
            
            </div>

             {/* Div 2 */}
             <div className="w-full h-full">
               {/* SwiperSlide */}
               <HotsaleCarousel productos={producto}/>
             </div>
            
        </div>
    </div>
  )
}

export default Hotsale