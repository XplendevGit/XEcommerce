"use client"
import React from 'react'

import  { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'

import { useShoppingCart } from 'use-shopping-cart'
import { ScrollArea } from '@/components/ui/scroll-area'

import { useEffect, useState } from 'react' 

import CartItem from './CartItem'

import  { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import  axios  from 'axios'

const CartSlidebar = () => {

  const [preferenceId, setPreferenceId] = useState(null)

  initMercadoPago('YOUR_PUBLIC_KEY', {
    locale: "es-CL"
  })

  {/* Detalles del carrito de compras */}

  const { 
    cartCount,
    cartDetails,
    shouldDisplayCart,
    handleCartClick,
    totalPrice, 
  } = useShoppingCart()

  {/* Datos de cliente a servidor por mercadopago */}
  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:3000/create_preference", {
        title: "mi primera venta viva chile",
        quantity: 1,
        price: 72000,
      })

      const { id } = response.data
      return id;
    } catch (error) {
      console.log(error)
    }
  };

  //Handle Buy
  const handleBuy = async () => {
    const id = await createPreference()
    if (id) {
      setPreferenceId(id)
    }
  };

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
      <Sheet open={true} onOpenChange={() => handleCartClick()}>
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
            <ScrollArea className="h-[50vh] xl:h-[74vh] pr-4 mb-4">
              {cartDetails && Object.entries(cartDetails).map(([key, item]) => {

                return <CartItem item={item} key={key} />
              })}
            </ScrollArea>}
            </>
            {cartCount > 0 && (
            <div>
              <div className="flex flex-col font-semibold">
                <div className="flex justify-between py-2">

                <h3 className="text-xl font-semibold">
                  Total
                </h3>
                <h2 className="text-lg font-semibold">
                  ${formatPrice(valorTotal)}
                </h2>

                </div>

                <button onClick={handleBuy} className='btn btn-primary'>
                  Comprar
                </button>
              </div>
              
              {/* Mercado Pago Button */}
              {preferenceId && <Wallet initialization={{ preferenceId: preferenceId}} />}
              
            </div> 
            )}
        </SheetContent>
      </Sheet>
  )
}

export default CartSlidebar