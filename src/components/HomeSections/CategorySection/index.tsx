import HomeSection from '../HomeSection'
import Category from './Category'
import httpClient from '@/axiosInstance'
import { CategoryType } from '@/types/category'
import { useEffect, useState } from 'react'

export default function CategorySection() {
  const [categories, setCategories] = useState<CategoryType[]>([])

  useEffect(() => {
    httpClient
      .get('/categories')
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error))
  }, [])

  const lastIndex = categories.length - 1
  const lastCategory = categories[lastIndex]

  return (
    <HomeSection title="LES GENRES MUSICAUX" seeMoreHref="/beats">
      <div className="carousel w-full">
        {categories.map((category) => {
          return (
            <Category
              key={category.id}
              category={category}
              isFirst={category.id === 0}
              isLast={category.id === lastCategory.id}
              currentId={category.id}
              lastId={lastIndex}
            />
          )
        })}
      </div>
    </HomeSection>
  )
}
