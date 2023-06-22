import { supabase } from '@/lib/supabaseClient'
import { CategoryInterface } from '@/types/category'
import { createContext, useEffect, useState } from 'react'

type CategoriesContextType = {
  categories: CategoryInterface[]
}

type CategoriesProviderType = {
  children: React.ReactNode
}

export const CategoriesContext = createContext<
  CategoriesContextType | undefined
>(undefined)

export default function CategoriesProvider({
  children,
}: CategoriesProviderType) {
  const [categories, setCategories] = useState<CategoryInterface[]>([])

  const getCategories = async () => {
    const { data } = await supabase.from('category').select()
    if (data) setCategories(data)
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  )
}
