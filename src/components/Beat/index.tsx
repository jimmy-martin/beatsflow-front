import Hover from './Hover'
import { BeatWithUserAndCategoryInterface } from '@/types/beat'
import { useRouter } from 'next/router'

export default function Beat({
  beat,
}: {
  beat: BeatWithUserAndCategoryInterface
}) {
  const router = useRouter()

  const handleBeatClick = () => {
    router.push(`/beats/${beat.id}`)
  }

  return (
    <div onClick={handleBeatClick} className="rounded p-3 w-full md:w-auto">
      <Hover beat={beat} />
      <div className="p-5 flex justify-between">
        <div>
          <h3 className="text-lg">{beat.title}</h3>
          <p className="text-gray-400">{beat.user?.username}</p>
        </div>
        <div>
          <span className="bg-red-600 text-red-200 text-xs font-medium mr-2 px-4 py-2 rounded-xl">
            {beat.category?.name}
          </span>
        </div>
      </div>
    </div>
  )
}
