import { BeatInterface, BeatWithUserAndCategoryInterface } from '@/types/beat'
import { CartItem } from '@/types/cartItem'
import { createContext, useEffect, useState } from 'react'

type CartContextType = {
  cart: CartItem[]
  total: number
  addItem: (item: BeatInterface | BeatWithUserAndCategoryInterface) => void
  removeItem: (id: number) => void
  clearCart: () => void
}

type CartProviderType = {
  children: React.ReactNode
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: CartProviderType) => {
  const [cart, setCart] = useState<CartItem[]>([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const cartFromLocalStorage = localStorage.getItem('cartItems')
    if (cartFromLocalStorage) {
      setCart(JSON.parse(cartFromLocalStorage))
    }
  }, [])

  useEffect(() => {
    let newTotal = 0
    cart.forEach((beat) => {
      newTotal += beat.price
    })
    setTotal(newTotal)
    if (cart.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cart))
    } else {
      localStorage.removeItem('cartItems')
    }
  }, [cart])

  const addItem = (beat: BeatInterface | BeatWithUserAndCategoryInterface) => {
    if (cart.find((item) => item.id === beat.id)) {
      return
    }
    const newItem = {
      id: beat.id,
      title: beat.title,
      price: beat.price,
      image_url: beat.image_url,
    }

    setCart([...cart, newItem])
  }

  const removeItem = (id: number) => {
    const newCart = cart.filter((beat) => beat.id !== id)
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{ cart, total, addItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
