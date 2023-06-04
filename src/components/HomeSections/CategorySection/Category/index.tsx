import Image from 'next/image'

type CategoryProps = {
  name: string
  imageUrl: string
  isFirst: boolean
  isLast: boolean
  currentId: number
  lastId: number
}

export default function Category({
  name,
  imageUrl,
  isFirst,
  isLast,
  currentId,
  lastId,
}: CategoryProps) {
  return (
    <div
      id={`slide${currentId}`}
      className="carousel-item relative w-full justify-center"
    >
      <div className="relative">
        <div className="w-24 rounded-full">
          <Image src={imageUrl} width={100} height={100} alt={name} />
        </div>
        <p className="text-center text-black font-bold m-3">{name}</p>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        {isFirst ? (
          <a href={`#slide${lastId}`} className="btn btn-circle">
            ❮
          </a>
        ) : (
          <a href={`#slide${currentId - 1}`} className="btn btn-circle">
            ❮
          </a>
        )}

        {isLast ? (
          <a href={`#slide${0}`} className="btn btn-circle">
            ❯
          </a>
        ) : (
          <a href={`#slide${currentId + 1}`} className="btn btn-circle">
            ❯
          </a>
        )}
      </div>
    </div>
  )
}
