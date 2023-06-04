import HomeSection from '../HomeSection'
import Category from './Category'
import { homeCategories } from '@/data'

export default function CategorySection() {
  const lastIndex = homeCategories.length - 1

  return (
    <HomeSection title="LES GENRES MUSICAUX" seeMoreHref="/beats">
      <div className="carousel w-full">
        {homeCategories.map((beat, idx) => {
          return (
            <Category
              key={idx}
              name={beat.name}
              imageUrl={beat.imageUrl}
              isFirst={idx === 0}
              isLast={idx === lastIndex}
              currentId={idx}
              lastId={lastIndex}
            />
          )
        })}
      </div>
    </HomeSection>
  )
}
