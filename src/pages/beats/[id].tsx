import httpClient from '@/axiosInstance'
import Beat from '@/components/Beat'
import Layout from '@/components/Layout'
import { BeatType } from '@/types/beat'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function BeatPage() {
  const router = useRouter()

  const [beat, setBeat] = useState<BeatType>()
  const [similarBeats, setSimilarBeats] = useState<BeatType[]>()

  const { id } = router.query

  useEffect(() => {
    httpClient
      .get(`/beats/similar/${id}`)
      .then((response) => {
        setBeat(response.data.beat)
        setSimilarBeats(response.data.similarBeats)
      })
      .catch((error) => console.log(error))
  }, [id])

  console.log(beat)
  console.log(similarBeats)

  if (!beat || !similarBeats) {
    return <div>Chargement...</div>
  }

  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-center text-4xl font-bold my-6">{beat.title}</h1>
        <p>
          <span className="text-gray-400">{beat.user.username}</span>
        </p>
        <p className="my-2">
          <span className="bg-red-600 text-red-200 text-xs font-medium mr-2 px-4 py-2 rounded-xl">
            {beat.category.name}
          </span>
        </p>
      </div>
      <div className="container mx-auto">
        <section className="py-2">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="grid gap-x-8 gap-y-10 mt-4 items-center sm:grid-cols-2">
              <div className="w-full mx-auto group sm:max-w-sm">
                <Beat beat={beat} />
              </div>
              <section>
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas iure dolores saepe, ratione esse quibusdam mollitia
                    quia id soluta sit optio quam aut enim tenetur explicabo
                    illum magnam maiores nulla! Numquam vero deserunt nisi
                    praesentium ab tempore fuga dolorum expedita nobis nesciunt,
                    accusamus fugiat velit fugit minus eaque enim perferendis
                    ipsa nostrum, aliquam magni ut. Sed dolor maxime at. Odio
                    labore vel quae ea repellat expedita similique, a ducimus
                    obcaecati!
                  </p>
                  <p className="text-2xl font-bold my-4">PRIX : 10 €</p>
                  <button className="btn bg-beatsflow-green my-4">
                    Ajouter au panier
                  </button>
                </div>
              </section>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-2xl font-bold my-4">
              Autres beats de {beat.user.username}
            </h2>
            <div className="grid gap-x-8 gap-y-10 mt-4 sm:grid-cols-2 lg:grid-cols-4">
              {similarBeats.map((beat) => (
                <Beat beat={beat} key={beat.id} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
