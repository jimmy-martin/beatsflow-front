import { CartContext } from '@/contexts/cartContext'
import { useContext } from 'react'

export default function useCartContext() {
  const cartContext = useContext(CartContext)

  if (!cartContext) {
    throw new Error('useCartContext must be used within a CartProvider')
  }

  return cartContext
}
