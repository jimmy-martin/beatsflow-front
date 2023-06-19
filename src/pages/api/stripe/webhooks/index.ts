import { getStripe } from '@/lib/stripe'
import { buffer } from 'micro'
import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

const stripe = getStripe()

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const buf = await buffer(req)
    const sig = req.headers['stripe-signature']!

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(
        buf.toString(),
        sig,
        process.env.STRIPE_WEBHOOK_SECRET!
      )

      if (event.type === 'checkout.session.completed') {
        const session = event.data.object
        console.log(session)
      }
    } catch (err) {
      const e = err as Error
      return res.status(400).send(`Webhook Error: ${e.message}`)
    }

    res.json({ received: true })
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
