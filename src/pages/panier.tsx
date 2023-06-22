import CartItem from '@/components/CartItem'
import Layout from '@/components/Layout'
import ThankYou from '@/components/ThankYou'
import useCartContext from '@/helpers/useCartContext'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function Panier() {
  const router = useRouter()
  const { cart, clearCart, total } = useCartContext()

  const [isPaymentSuccessfull, setIsPaymentSuccessfull] = useState(false)

  const isCartEmpty = cart.length === 0

  const handleCheckout = async () => {
    const response = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cart }),
    })
    const data = await response.json()
    window.location.href = data.url
  }

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)

    if (query.get('success')) {
      clearCart()
      setIsPaymentSuccessfull(true)
    }

    if (query.get('canceled')) {
      router.push('/panier')
    }
  }, [])

  if (isPaymentSuccessfull) {
    return (
      <ThankYou
        title="BeatsFlow vous remercie pour votre achat !"
        message="Merci pour votre achat "
      />
    )
  }

  return (
    <Layout>
      <div className="cart-page p-6">
        <h1 className="text-3xl font-semibold mb-8">Votre Panier</h1>
        {cart.map((beat) => (
          <CartItem key={beat.id} beat={beat} />
        ))}
        {!isCartEmpty && (
          <button
            className="text-red-500 hover:text-red-600 text-xl m-4"
            onClick={() => clearCart()}
          >
            Tout supprimer
          </button>
        )}
        <div className="flex items-center justify-between mt-8">
          <h2 className="text-2xl font-semibold">Total:</h2>
          <p className="text-2xl font-semibold">{total}€</p>
        </div>
        <button
          onClick={handleCheckout}
          className={
            `btn btn-primary text-white mt-8` +
            (isCartEmpty
              ? ' bg-gray-400 hover:bg-gray-400 cursor-not-allowed'
              : ' bg-beatsflow-green hover:bg-beatsflow-green-hover')
          }
        >
          Procéder au paiement
        </button>
      </div>
    </Layout>
  )
}
