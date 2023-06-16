import { CategoryInterface } from '@/types/category'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function FilterPanel({
  categories,
}: {
  categories: CategoryInterface[]
}) {
  const router = useRouter()
  const selectedCategoryId = parseInt(router.query.categorie as string)

  return (
    <div className="w-full shadow p-5 rounded-lg bg-white">
      <div className="flex flex-wrap items-center justify-between mt-4">
        <p className="font-medium">Filtres</p>
        <div className="flex flex-wrap justify-center gap-4 m-4">
          <Link
            href={{
              pathname: '/beats',
            }}
            className="btn px-4 py-2 bg-beatsflow-light-green hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-full"
          >
            Voir tout
          </Link>
          {categories.map((category) => (
            <Link
              href={{
                pathname: '/beats',
                query: { categorie: category.id },
              }}
              key={category.id}
              className={`btn px-4 py-2 ${
                selectedCategoryId === category.id
                  ? 'bg-beatsflow-light-green hover:bg-gray-200'
                  : 'bg-gray-100 hover:bg-gray-200'
              } text-gray-800 text-sm font-medium rounded-full`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
