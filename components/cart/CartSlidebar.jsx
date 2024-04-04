"use client"
import React from 'react'

import  { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'

import { useShoppingCart } from 'use-shopping-cart'
import { ScrollArea } from '@/components/ui/scroll-area'

import { useEffect, useState } from 'react' 

import CartItem from './CartItem'

const CartSlidebar = () => {

  const { 
    cartCount,
    cartDetails,
    shouldDisplayCart,
    handleCartClick,
    totalPrice, 
  } = useShoppingCart()

  // Formatea el precio con un punto como separador de miles
  const formatPrice = (price) => {
    return price.toLocaleString('es-CL');
  };

  // Estado para almacenar el valor total del carrito
  const [valorTotal, setValorTotal] = useState(0);

  // Calcula el valor total del carrito cuando cambia el carrito
  useEffect(() => {
    if (!cartDetails) return;

    // Suma los valores de cada elemento del carrito tomando en cuenta la cantidad
    const total = Object.values(cartDetails).reduce((acc, item) => {
      return acc + item.valor * item.quantity;
    }, 0);

    setValorTotal(total);
  }, [cartDetails]);

  return (
      <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
        <SheetContent>
            <SheetHeader>
                <SheetTitle className="text-left mb-12">
                  Mi Carrito de Compras <span className="text-lg font-bold text-accent">({cartCount})</span>
            </SheetTitle>
            </SheetHeader>
            <>
            {cartCount === 0 ? 
            <div className="flex flex-col items-center justify-center w-full h-[760px]">
              <h5 className="text-black/50">Tu carrito está vacío</h5>
            </div> 
            :
            <ScrollArea className="h-[70vh] xl:h-[74vh] pr-4 mb-4">
              {cartDetails && Object.entries(cartDetails).map(([key, item]) => {
                console.log(item)
                console.log(totalPrice)
                console.log(cartCount)
                console.log(cartDetails)

                return <CartItem item={item} key={key} />
              })}
            </ScrollArea>}
            </>
            {cartCount > 0 && (
            <div>
              <div className="flex justify-between font-semibold">
                <div className="">Total</div>
                <div className="">${formatPrice(valorTotal)}</div>
              </div>
            </div> 
            )}
        </SheetContent>
      </Sheet>
  )
}

export default CartSlidebar