import { supabase } from '@/lib/supabaseClient'
import { BeatInterface } from '@/types/beat'

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
}): Promise<BeatInterface> => {
  const { data } = await supabase
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
        'https://zftucfqcjmqbkobajvbt.supabase.co/storage/v1/object/public/beatsflow/placeholders/home-beats-placeholder.png',
    })
    .select('*')
    .single()

  if (!data) {
    throw new Error('Error creating beat')
  }

  return data
}
