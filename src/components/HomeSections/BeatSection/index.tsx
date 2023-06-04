import HomeSection from '../HomeSection'
import Beat from '@/components/Beat'
import { homeBeats } from '@/data'

export default function BeatSection() {
  return (
    <HomeSection title="LES MEILLEURS BEATS" seeMoreHref="/beats">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {homeBeats.map((beat, idx) => (
          <Beat key={idx} beat={beat} />
        ))}
      </div>
    </HomeSection>
  )
}
