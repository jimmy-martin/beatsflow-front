import { supabase } from '@/lib/supabaseClient'
import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const beat = req.body

    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: '2022-11-15',
      })

      const product = await stripe.products.create({
        id: beat.id.toString(),
        name: beat.title,
        description: beat.description || '',
        images: [beat.image_url],
      })

      const price = await stripe.prices.create({
        unit_amount: beat.price * 100,
        currency: 'eur',
        product: product.id,
      })

      await supabase
        .from('beat')
        .update({ stripe_id: price.id })
        .eq('id', beat.id)

      res
        .status(200)
        .json({ message: 'Product and price created successfully on Stripe' })
    } catch (error) {
      console.error(error)
      res
        .status(500)
        .json({ error: 'Error creating product and price on Stripe' })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
