import Beat from '@/components/Beat'
import Layout from '@/components/Layout'
import useAuthContext from '@/helpers/useAuthContext'
import useCartContext from '@/helpers/useCartContext'
import useCategoriesContext from '@/helpers/useCategoriesContext'
import useToastContext from '@/helpers/useToastContext'
import { supabase } from '@/lib/supabaseClient'
import { BeatInterface } from '@/types/beat'
import { CategoryInterface } from '@/types/category'
import { UserInterface } from '@/types/user'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context
  if (!params) return { props: {} }

  const id = params.id

  const { data: beat, error } = await supabase
    .from('beat')
    .select('*')
    .eq('id', id)
    .single()

  if (error) console.log('Error: ', error)
  if (!beat) return { props: {} }

  const { data: similarBeats } = await supabase
    .from('beat')
    .select('*')
    .eq('user_id', beat.user_id)
    .neq('id', beat.id)
    .limit(4)

  const { data: user, error: userError } = await supabase
    .from('user')
    .select('*')
    .eq('id', beat.user_id)
    .single()

  if (userError) console.log('Error: ', userError)

  return {
    props: {
      beat,
      user,
      similarBeats,
    },
  }
}

export default function BeatPage({
  beat,
  user,
  similarBeats,
}: {
  beat: BeatInterface
  user: UserInterface
  similarBeats: BeatInterface[]
}) {
  const { addItem } = useCartContext()
  const { isLoggedUser, isLoadingUser, loggedUser } = useAuthContext()
  const { showToast } = useToastContext()

  const { categories } = useCategoriesContext()
  const category = categories.find((cat) => cat.id === beat.category_id)
  if (!category) return null

  const handleClickOnAddToCart = () => {
    addItem(beat)
    showToast('Beat ajouté au panier')
  }

  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-center text-4xl font-bold my-6">{beat.title}</h1>
        <p>
          <span className="text-gray-400">{user.username}</span>
        </p>
        <p className="my-2">
          <span className="bg-red-600 text-red-200 text-xs font-medium mr-2 px-4 py-2 rounded-xl">
            {category.name}
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
                  <p>{beat.description}</p>
                  <p className="text-2xl font-bold my-4">
                    PRIX : {beat.price} €
                  </p>
                  {loggedUser?.id !== beat.user_id && (
                    <button
                      className="btn bg-beatsflow-green my-4"
                      onClick={handleClickOnAddToCart}
                    >
                      Ajouter au panier
                    </button>
                  )}
                </div>
              </section>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-2xl font-bold my-4">
              Autres beats de {user.username}
            </h2>
            <div className="grid gap-x-8 gap-y-10 mt-4 sm:grid-cols-2 lg:grid-cols-4">
              {similarBeats.map((beat) => (
                <Beat key={beat.id} beat={beat} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
