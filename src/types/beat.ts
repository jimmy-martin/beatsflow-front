import { CategoryInterface } from './category'
import { UserInterface } from './user'

export interface BeatInterface {
  category_id: number
  created_at: string
  description: string | null
  id: number
  image_url: string
  price: number
  tempo: number | null
  title: string
  updated_at: string | null
  url: string
  user_id: string
  user?: UserInterface
  category?: CategoryInterface
  stripe_id: string | null
}

export interface BeatWithUserAndCategoryInterface {
  category_id: number
  created_at: string
  description: string | null
  id: number
  image_url: string
  price: number
  tempo: number | null
  title: string
  updated_at: string | null
  url: string
  user_id: string
  stripe_id: string | null
  user: {
    username: string
  } | null
  category: {
    name: string
  } | null
}
