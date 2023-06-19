import useCartContext from '@/helpers/useCartContext'
import { CartItem } from '@/types/cartItem'
import Image from 'next/image'
import React, { useContext } from 'react'

export default function CartItem({ beat }: { beat: CartItem }) {
  const { removeItem } = useCartContext()

  return (
    <div className="flex items-center justify-between p-6 border-b border-gray-200">
      <div className="flex items-center">
        <div className="relative ">
          <Image
            src={beat.image_url}
            alt={beat.title}
            width="75"
            height="75"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{beat.title}</h2>
          <p className="text-gray-600">{beat.price}€</p>
        </div>
      </div>
      <button
        className="text-red-500 hover:text-red-600 transition"
        onClick={() => removeItem(beat.id)}
      >
        Supprimer
      </button>
    </div>
  )
}
