export type BeatType = {
  id: number
  title: string
  description?: string
  price: number
  tempo?: number
  image_url: string
  file_path: string
  created_at: Date
  updated_at: Date
  user_id: number
  category_id: number
  user: {
    username: string
  }
  category: {
    id: number
    name: string
  }
}
