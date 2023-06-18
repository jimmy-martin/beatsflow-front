import { supabase } from '@/lib/supabaseClient'

export const createBeat = async ({
  title,
  description,
  price,
  tempo,
  category_id,
  user_id,
  url,
  image_url,
}: {
  title: string
  description: string | null
  price: number
  tempo: number | null
  category_id: number
  user_id: string
  url: string
  image_url: string | null
}) => {
  const { data, error } = await supabase
    .from('beat')
    .insert({
      title,
      description,
      price,
      tempo,
      category_id,
      user_id,
      url,
      image_url:
        image_url ||
        'https://zucowcwtsjlptsgvimzf.supabase.co/storage/v1/object/public/beats_images/home-beats-placeholder.png',
    })
    .select('*')

  if (error) {
    return false
  }

  return true
}
