import Image from 'next/image'

type AudioPlayerDescriptionProps = {
  title: string
  username: string
  imageUrl: string
}

export default function AudioPlayerDescription({
  title,
  username,
  imageUrl,
}: AudioPlayerDescriptionProps) {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-gray-600">{username}</span>
      <span className="text-sm text-gray-600">{title}</span>

      <Image
        src={imageUrl}
        alt={title}
        width={80}
        height={80}
        className="rounded-full"
      />
    </div>
  )
}
