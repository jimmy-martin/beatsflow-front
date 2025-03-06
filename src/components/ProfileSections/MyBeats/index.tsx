import Beat from '@/components/Beat'
import useAuthContext from '@/helpers/useAuthContext'
import { supabase } from '@/lib/supabaseClient'
import { BeatInterface, BeatWithUserAndCategoryInterface } from '@/types/beat'
import { useEffect, useState } from 'react'

export default function MyBeats() {
  const { loggedUser } = useAuthContext()

  const [beats, setBeats] = useState<BeatWithUserAndCategoryInterface[]>([])

  const getBeats = async () => {
    const { data: beats, error } = await supabase
      .from('beat')
      .select('*, user(username), category(name)')
      .eq('user_id', loggedUser?.id)

    if (error) {
      throw new Error(error.message)
    }

    if (beats) setBeats(beats)
  }

  useEffect(() => {
    getBeats()
  }, [])

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {beats.map((beat) => (
          <Beat key={beat.id} beat={beat} />
        ))}
      </div>
    </>
  )
}
