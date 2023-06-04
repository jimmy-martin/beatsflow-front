import Image from 'next/image'
import Link from 'next/link'

export default function Connection() {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-sm w-full text-gray-600">
          <div className="text-center">
            <Link href="/">
              <Image
                src="/assets/logo-sans-bg.png"
                width={150}
                height={150}
                className="mx-auto"
                alt="logo"
              />
            </Link>
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Connectez-vous
              </h3>
              <p className="">
                Vous êtes nouveau ?{' '}
                <Link
                  href="/inscription"
                  className="font-medium text-beatsflow-light-green hover:text-green-500"
                >
                  Inscription
                </Link>
              </p>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Mot de passe</label>
              <input
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-beatsflow-light-green shadow-sm rounded-lg"
              />
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-beatsflow-light-green hover:bg-green-500 active:bg-green-600 rounded-lg duration-150">
              Connexion
            </button>
            <div className="text-center">
              <a href="#" className="hover:text-beatsflow-light-green">
                Mot de passe oublié?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
