import Hover from './Hover'

type BeatProps = {
  title: string
  username: string
  categoryName: string
  imageUrl?: string
}

export default function Beat({
  title,
  username,
  categoryName,
  imageUrl,
}: BeatProps) {
  return (
    <div className="rounded p-3 w-full md:w-auto">
      <Hover imageUrl={imageUrl} />
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
