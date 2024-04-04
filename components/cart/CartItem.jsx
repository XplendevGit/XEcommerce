import React from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import { useShoppingCart } from 'use-shopping-cart'
import { FaPlus, FaMinus, FaX } from 'react-icons/fa6'  
import { urlFor } from '@/sanity/lib/client'

const CartItem = ({item}) => {

  console.log(item)
  const{ removeItem , incrementItem, decrementItem } = useShoppingCart()

        // Formatea el precio con un punto como separador de miles
  const formatPrice = (price) => {
    return price.toLocaleString('es-CL');
  };

  // Asegurarse de que valor y quantity sean números
  const valor = parseFloat(item.valor);
  const quantity = parseInt(item.quantity);

  // Calcular el total
  let total = 0;
  if (!isNaN(valor) && !isNaN(quantity)) {
    total = valor * quantity;
  }

  return (
    <div className="flex w-full justify-between mb-4 items-center h-[120px] border-b">
      {/* Imagen */}
      <div className="w-[110px] h-[110px] relative">
        <Image 
        src={item.imagenes && item.imagenes[0]
        ? urlFor(item.imagenes[0]).url()
        : '/https://i.postimg.cc/ZR1gbyZ3/loading.png'}
        fill
        priority
        alt={item.nombre} 
        sizes='(max-width: 110px) 100px, 110px'
        className="object-contain"
        />
      </div>
      {/* Nombre Valor Cantidad y Eliminar de carrito */}
      <div className="w-full max-w-[180px] flex flex-col justify-center gap-4">
        <div className="flex items-center justify-between">
          <h5 className="">{item.nombre}</h5>
          <button onClick={() => removeItem(item.id)} className="text-accent">
            <FaX className="text-sm"></FaX>
          </button>
        </div>
        {/* Incremento, decremento, valor del producto */}
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <button onClick={() => decrementItem(item.id)}>
              <FaMinus className="text-[10px] text-accent">
              </FaMinus>
            </button>
            <div className="text-md font-semibold">{item.quantity}</div>
            <button onClick={() => incrementItem(item.id)}>
              <FaPlus className="text-[10px] text-primary">
              </FaPlus>
            </button>
          </div>
          <div className="text-md font-semibold text-balance text-right">
            ${formatPrice(total)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem