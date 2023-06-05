import HomeSection from '../HomeSection'
import httpClient from '@/axiosInstance'
import Beat from '@/components/Beat'
import { BeatType } from '@/types/beat'
import { useEffect, useState } from 'react'

export default function BeatSection() {
  const [beats, setBeats] = useState<BeatType[]>([])

  useEffect(() => {
    httpClient
      .get('/beats/home')
      .then((response) => setBeats(response.data))
      .catch((error) => console.log(error))
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
