import Hover from './Hover'
import { Beat as BeatType } from '@/data'

type BeatProps = {
  beat: BeatType
}

export default function Beat({ beat }: BeatProps) {
  const { title, audioUrl, imageUrl, username, categoryName } = beat

  return (
    <div className="rounded p-3 w-full md:w-auto">
      <Hover
        title={title}
        audioUrl={audioUrl}
        imageUrl={imageUrl}
        username={username}
        categoryName={categoryName}
      />
      <div className="p-5 flex justify-between">
        <div>
          <h3 className="text-lg">{title}</h3>
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
