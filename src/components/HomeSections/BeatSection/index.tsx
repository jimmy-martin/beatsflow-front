import HomeSection from '../HomeSection'
import Beat from '@/components/Beat'
import { supabase } from '@/lib/supabaseClient'
import { BeatInterface } from '@/types/beat'
import { useEffect, useState } from 'react'

export default function BeatSection() {
  const [beats, setBeats] = useState<BeatInterface[]>([])

  async function getLatestBeats() {
    const { data } = await supabase
      .from('beat')
      .select()
      .limit(4)
      .order('created_at', { ascending: false })

    if (data) setBeats(data)
  }

  useEffect(() => {
    getLatestBeats()
  }, [])

  return (
    <HomeSection title="LES MEILLEURS BEATS" seeMoreHref="/beats">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {beats.map((beat) => (
          <Beat key={beat.id} beat={beat} />
        ))}
      </div>
    </HomeSection>
  )
}
