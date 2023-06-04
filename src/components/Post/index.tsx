import Image from 'next/image'

type PostProps = {
  href: string
  imageUrl: string
  date: string
  title: string
  content: string
}

export default function Post({
  href,
  imageUrl,
  title,
  date,
  content,
}: PostProps) {
  return (
    <a href={href}>
      <Image
        src={imageUrl}
        loading="lazy"
        alt={title}
        className="w-full rounded-lg"
        width={150}
        height={150}
      />
      <div className="mt-3 space-y-2">
        <span className="block text-indigo-600 text-sm">{date}</span>
        <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
          {title}
        </h3>
        <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
          {content}
        </p>
      </div>
    </a>
  )
}
