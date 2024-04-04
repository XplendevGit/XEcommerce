import {client} from '@/sanity/lib/client'
import React from 'react'
import FiltradoProductos from '@/app/detalleproductos/FiltradoProductos';

const getData = async () => {
  const query = `*[_type == 'producto'] {
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
  console.log()
  return data;
}

const DetalleProductos = async () => {
  const productos = await getData()
  console.log(productos)
  return (
    <FiltradoProductos productos={productos}>Nuestros Productos</FiltradoProductos>
  )
}

export default DetalleProductos