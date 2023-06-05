import httpClient from '@/axiosInstance'
import Beat from '@/components/Beat'
import FilterPanel from '@/components/FilterPanel'
import Layout from '@/components/Layout'
import { BeatType } from '@/types/beat'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Beats() {
  const router = useRouter()

  const [beats, setBeats] = useState<BeatType[]>([])
  const [searchValue, setSearchValue] = useState('')

  const selectedCategoryId = router.query.categorie

  useEffect(() => {
    httpClient
      .get('/beats/home')
      .then((response) => setBeats(response.data))
      .catch((error) => console.log(error))
  }, [])

  const filteredBeats = beats.filter((beat) => {
    if (
      selectedCategoryId &&
      beat.category_id !== parseInt(selectedCategoryId as string)
    ) {
      return false
    }

    const searchTerm = searchValue.toLowerCase()
    return (
      beat.title.toLowerCase().includes(searchTerm) ||
      beat.user.username.toLowerCase().includes(searchTerm)
    )
  })

  return (
    <Layout>
      <h1 className="text-center text-4xl font-bold my-6">BEATS</h1>
      <form className="max-w-md px-4 mx-auto">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="search"
            placeholder="Rechercher un beat, un beatmaker ou un tag"
            className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-full outline-none bg-gray-200 focus:bg-white focus:border-beatsflow-light-green"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </form>
      <div className="container mx-auto">
        <FilterPanel />
        <section className="py-8">
          {filteredBeats.length === 0 && (
            <p className="text-center text-gray-400">
              Aucun beat ne correspond à votre recherche
            </p>
          )}
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-4">
              {filteredBeats.map((beat, key) => (
                <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                  <Beat beat={beat} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}
