import { supabase } from './supabaseClient'
import { BeatInterface } from '@/types/beat'
import Stripe from 'stripe'

let stripeInstance: Stripe | null = null

export function getStripe() {
  if (!stripeInstance) {
    stripeInstance = new Stripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '',
      {
        apiVersion: '2022-11-15',
      }
    )
  }
  return stripeInstance
}
