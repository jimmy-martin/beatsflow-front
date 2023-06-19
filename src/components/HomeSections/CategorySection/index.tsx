import HomeSection from '../HomeSection'
import Category from './Category'
import { supabase } from '@/lib/supabaseClient'
import { CategoryInterface } from '@/types/category'
import { useEffect, useState } from 'react'

export default function CategorySection() {
  const [categories, setCategories] = useState<CategoryInterface[]>([])

  async function getCategories() {
    const { data } = await supabase.from('category').select()
    if (data) setCategories(data)
  }

  useEffect(() => {
    getCategories()
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
