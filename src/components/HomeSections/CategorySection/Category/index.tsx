import { CategoryType } from '@/types/category'
import Image from 'next/image'

type CategoryProps = {
  category: CategoryType
  isFirst: boolean
  isLast: boolean
  currentId: number
  lastId: number
}

export default function Category({
  category,
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
        <div className="w-24 rounded-full mx-auto">
          <Image
            src={category.image_url}
            width={100}
            height={100}
            alt={category.name}
          />
        </div>
        <p className="text-center text-black font-bold m-3">{category.name}</p>
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
