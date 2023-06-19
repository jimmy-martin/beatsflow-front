import { createBeat } from '@/helpers/uploadBeat'
import useAuthContext from '@/helpers/useAuthContext'
import { supabase } from '@/lib/supabaseClient'
import { CategoryInterface } from '@/types/category'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function UploadBeatSection() {
  const router = useRouter()
  const { loggedUser } = useAuthContext()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [tempo, setTempo] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [audio, setAudio] = useState<File | null>(null)
  const [categories, setCategories] = useState<CategoryInterface[]>([])

  const uploadFile = async (bucket: string, file: File, path: string) => {
    const { data: fileData } = await supabase.storage
      .from(bucket)
      .upload(path, file)

    const { data } = supabase.storage.from(bucket).getPublicUrl(fileData!.path)

    return data.publicUrl
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!loggedUser) return

    e.preventDefault()

    const formData = new FormData()

    formData.append('title', title)
    formData.append('description', description)
    formData.append('price', price)
    formData.append('tempo', tempo)
    formData.append('category_id', categoryId)
    formData.append('user_id', loggedUser.id)

    if (image && audio) {
      const imageUrl = await uploadFile(
        'beats_images',
        image,
        `${loggedUser.id}/${new Date().getTime()}_${title}`
      )

      formData.append('image_url', imageUrl)

      const url = await uploadFile(
        'beats',
        audio,
        `${loggedUser.id}/${new Date().getTime()}_${title}`
      )

      formData.append('url', url)
    }

    const newBeat = await createBeat({
      title: formData.get('title')!.toString(),
      description: formData.get('description')!.toString(),
      price: parseInt(formData.get('price')!.toString()),
      tempo: parseInt(formData.get('tempo')!.toString()),
      category_id: parseInt(formData.get('category_id')!.toString()),
      user_id: formData.get('user_id')!.toString(),
      image_url: formData.get('image_url')!.toString(),
      url: formData.get('url')!.toString(),
    })

    try {
      const res = await fetch('/api/create-beat-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBeat),
      })

      if (!res.ok) {
        throw new Error(res.statusText)
      }

      router.push(`/beats/${newBeat.id}`)
    } catch (err) {
      console.error(err)
    }
  }

  const loadCategories = async () => {
    const { data } = await supabase.from('category').select('*')
    if (data) setCategories(data)
  }

  useEffect(() => {
    loadCategories()
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-control w-full my-8">
          <label className="label">
            <span className="label-text">Titre</span>
          </label>
          <input
            type="text"
            placeholder="Titre du beat"
            className="input input-bordered w-full "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control w-full my-8">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            placeholder="Description du beat"
            className="textarea textarea-bordered w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-control w-full my-8">
          <label className="label">
            <span className="label-text">Prix</span>
          </label>
          <input
            type="number"
            placeholder="Prix du beat"
            className="input input-bordered w-full"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-control w-full my-8">
          <label className="label">
            <span className="label-text">Tempo</span>
          </label>
          <input
            type="number"
            placeholder="Tempo du beat"
            className="input input-bordered w-full"
            value={tempo}
            onChange={(e) => setTempo(e.target.value)}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Catégorie</span>
          </label>
          <select
            className="select select-bordered"
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option disabled selected>
              Choisissez une catégorie
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full my-8">
          <label className="label">
            <span className="label-text">Fichier audio</span>
          </label>
          <input
            type="file"
            accept="audio/*"
            className="file-input file-input-bordered w-full"
            onChange={(e) =>
              setAudio(e.target.files ? e.target.files[0] : null)
            }
          />
        </div>
        <div className="form-control w-full my-8">
          <label className="label">
            <span className="label-text">Image du beat</span>
          </label>
          <input
            type="file"
            accept="image/jpeg, image/png"
            className="file-input file-input-bordered w-full"
            onChange={(e) =>
              setImage(e.target.files ? e.target.files[0] : null)
            }
          />
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-primary text-white bg-beatsflow-green hover:bg-beatsflow-green-hover"
          >
            <span className="text-white">Enregistrer</span>
          </button>
        </div>
      </form>
    </>
  )
}
