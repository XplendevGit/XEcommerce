import {client} from '@/sanity/lib/client'
import ProductosCategorias from '@/app/detalleproductos/ProductosCategorias';
import React from 'react'

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
    <ProductosCategorias productos={productos}>Nuestros Productos</ProductosCategorias>
  )
}

export default DetalleProductos