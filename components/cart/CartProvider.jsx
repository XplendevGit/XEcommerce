'use client'

import { CartProvider as CProvider } from 'use-shopping-cart'

import React from 'react'

const CartProvider = ({ children }) => {
  return (
    <CProvider
    mode='payment'
    cartMode='client-only'
    stripe=''
    successUrl='succes'
    cancelUrl='error'
    language='en-US'
    currency='USD'
    billingAddressCollection={true}
    shouldPersist={true}
    >
    {children}
    </CProvider>
  )
}

export default CartProvider