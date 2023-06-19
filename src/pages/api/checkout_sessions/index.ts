import { supabase } from '@/lib/supabaseClient'
import { CartItem } from '@/types/cartItem'
import { NextApiRequest, NextApiResponse } from 'next'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const cart: CartItem[] = req.body.cart

      const ids = cart.map((item) => item.id)

      const { data: beats } = await supabase
        .from('beat')
        .select('*')
        .in('id', ids)

      const lineItems = beats?.map((beat) => {
        return {
          price: beat.stripe_id,
          quantity: 1,
        }
      })

      const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: `${req.headers.origin}/panier?success=true`,
        cancel_url: `${req.headers.origin}/panier?canceled=true`,
      })

      res.status(200).json({ url: session.url })
    } catch (err) {
      const e = err as Error
      res.status(500).json(e.message)
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
