"use client"
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { useToast} from '../ui/use-toast'

const AddToCart = ({ 
  btnStyles, 
  text, 
  icon, 
  id, 
  currency,
  nombre,
  descripcion,
  imagenes,
  valor
  }) => {


  const { addItem } = useShoppingCart()
  const { toast } = useToast()

  const producto = {
    id: id,
    currency: currency,
    nombre: nombre,
    description: descripcion,
    imagenes: imagenes,
    valor: valor,
  }

  return (
    <button 
    className={`${btnStyles}`}
    onClick={() => {
      addItem(producto)
      toast({
        title: `${nombre}`,
        description: 'Producto agregado al carrito',
        duration: 2000,
        isClosable: true,
      })
      }}
    >
      <div className="">{text}</div>
      <div className="">{icon}</div>
    </button>
  )
}

export default AddToCart