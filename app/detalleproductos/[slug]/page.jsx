import React from 'react'

import { client, urlFor} from '@/app/lib/sanity'
import Image from 'next/image'
import AddToCart from '@/components/AddToCart'

import Link from 'next/link'

import { Bike, Clock, PackageCheck, RefreshCw, ChevronLeft } from 'lucide-react'

const getData = async (slug) => {
  const query = `*[_type == "producto" && slug.current == '${slug}'][0]{
    _id,
    imagenes,
    valor,
    valor_id,
    nombre,
    descripcion,
    "slug": slug.current,
    "categorias": categorias->{nombre}
  }`

  const data = await client.fetch(query)

  return data
}

      // Formatea el precio con un punto como separador de miles
      const formatPrice = (price) => {
        return price.toLocaleString('es-CL');
      };


const ProductDetails = async ({ params }) => {
  const producto = await getData(params.slug)  
  console.log(producto)
  return (
    <>

    <section className="pt-24 pb-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-14">
          {/* Imagen */}
          <div className="xl:flex-1 h-[460px] xl:w-[700px] xl:h-[540px] flex justify-center items-center">
            <Image 
            src={urlFor(producto.imagenes[0]).url()}
            alt={producto.nombre}
            width={479}
            height={290}
            priority
           />
          </div>
          {/* Texto del producto */}

            <div className=" flex-1 flex flex-col justify-center items-start gap-10">
               <Link href='/' className="flex items-center gap-2 font-semibold">
                <ChevronLeft className="" size={20} />
                Volver al Inicio
               </Link>
               <div className="flex flex-col gap-6 items-start justify-center">
                <div className="">
                  <h3 className="">{producto.nombre}</h3>
                  <h4 className="text-lg font-bold text-accent">${formatPrice(producto.valor)}</h4>
                </div>
                <p className="">{producto.descripcion}</p>
                <AddToCart
                id={producto._id}
                nombre={producto.nombre}
                currency={"USD"}
                descripcion={producto.descripcion}
                imagenes={producto.imagenes}
                valor={producto.valor}
                btnStyles='btn btn-accent'
                text='Agregar al Carrito'
                 />
               </div>

               {/* Información */}
               <div className="space-y-2">
                <div className="flex gap-3">
                  <PackageCheck size={25} className="text-primary"/>
                  <p className="">Envío gratis por compras sobre <span className="">$850.000</span></p>
                </div>
                <div className="flex gap-3">
                  <RefreshCw size={25} className="text-primary"/>
                  <p className="">Devolución gratis por 5 días</p>
                </div>
                <div className="flex gap-3">
                  <Clock size={25} className="text-primary"/>
                  <p className="">Envío al día siguiente</p>
                </div>
               </div>
            </div>
         </div>
      </div>
    </section>

    </>
  )
}

export default ProductDetails