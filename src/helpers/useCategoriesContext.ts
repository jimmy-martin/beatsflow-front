import { CategoriesContext } from '@/contexts/categoriesContext'
import { useContext } from 'react'

export default function useCategoriesContext() {
  const categoriesContext = useContext(CategoriesContext)

  if (!categoriesContext) {
    throw new Error(
      'useCategoriesContext must be used within a CategoriesContextProvider'
    )
  }

  return categoriesContext
}
