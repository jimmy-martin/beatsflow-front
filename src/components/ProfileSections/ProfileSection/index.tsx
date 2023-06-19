import useAuthContext from '@/helpers/useAuthContext'
import { UserInterface } from '@/types/user'
import { FormEvent, useState } from 'react'

export default function ProfileSection() {
  const { updateUser, loggedUser } = useAuthContext()

  const [username] = useState(loggedUser?.username ?? '')
  const [lastName, setLastName] = useState(loggedUser?.last_name ?? '')
  const [firstName, setFirstName] = useState(loggedUser?.first_name ?? '')
  const [updatedAt] = useState(loggedUser?.updated_at ?? '')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const user: Partial<UserInterface> = {
      last_name: lastName,
      first_name: firstName,
      updated_at: new Date().toISOString(),
    }

    await updateUser(user)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-control w-full my-8">
          <label className="label">
            <span className="label-text">Nom d&apos;utilisateur</span>
          </label>
          <input
            type="text"
            placeholder="Votre nom d'utilisateur"
            className="input input-bordered w-full"
            value={username}
            disabled
          />
        </div>
        <div className="form-control w-full my-8">
          <label className="label">
            <span className="label-text">Nom</span>
          </label>
          <input
            type="text"
            placeholder="Votre nom"
            className="input input-bordered w-full"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        <div className="form-control w-full my-8">
          <label className="label">
            <span className="label-text">Prénom</span>
          </label>
          <input
            type="text"
            placeholder="Votre prénom"
            className="input input-bordered w-full"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>
        {updatedAt && (
          <div className="form-control w-full my-8">
            <span>
              Dernière mise à jour le {new Date(updatedAt).toLocaleDateString()}
            </span>
          </div>
        )}
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
