import CartItem from '@/components/CartItem'
import Layout from '@/components/Layout'
import useCartContext from '@/helpers/useCartContext'
import React, { useContext } from 'react'

export default function Panier() {
  const { cart, total } = useCartContext()

  return (
    <Layout>
      <div className="cart-page p-6">
        <h1 className="text-3xl font-semibold mb-8">Votre Panier</h1>
        {cart.map((beat) => (
          <CartItem key={beat.id} beat={beat} />
        ))}
        <div className="flex items-center justify-between mt-8">
          <h2 className="text-2xl font-semibold">Total:</h2>
          <p className="text-2xl font-semibold">{total}€</p>
        </div>
      </div>
    </Layout>
  )
}
