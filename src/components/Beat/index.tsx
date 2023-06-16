import Hover from './Hover'
import { supabase } from '@/lib/supabaseClient'
import { BeatInterface } from '@/types/beat'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Beat({ beat }: { beat: BeatInterface }) {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [categoryName, setCategoryName] = useState('')

  useEffect(() => {
    const getUsername = async () => {
      const { data: user } = await supabase
        .from('user')
        .select('username')
        .eq('id', beat.user_id)
        .single()

      if (user) setUsername(user.username)
    }

    const getCategoryName = async () => {
      const { data: category } = await supabase
        .from('category')
        .select('name')
        .eq('id', beat.category_id)
        .single()

      if (category) setCategoryName(category.name)
    }

    getUsername()
    getCategoryName()
  }, [beat.category_id, beat.user_id])

  const handleBeatClick = () => {
    router.push(`/beats/${beat.id}`)
  }

  return (
    <div onClick={handleBeatClick} className="rounded p-3 w-full md:w-auto">
      <Hover beat={beat} />
      <div className="p-5 flex justify-between">
        <div>
          <h3 className="text-lg">{beat.title}</h3>
          <p className="text-gray-400">{username}</p>
        </div>
        <div>
          <span className="bg-red-600 text-red-200 text-xs font-medium mr-2 px-4 py-2 rounded-xl">
            {categoryName}
          </span>
        </div>
      </div>
    </div>
  )
}
