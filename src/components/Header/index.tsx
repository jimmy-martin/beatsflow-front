import RedirectionButton from '../RedirectionButton'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Header() {
  const [state, setState] = useState(false)

  const router = useRouter()

  const navigation = [
    { title: 'A PROPOS', path: '/a-propos' },
    { title: 'BEATS', path: '/beats' },
    { title: 'ACTUALITES', path: '/actualites' },
    { title: 'CONNEXION', path: '/connexion' },
  ]

  return (
    <>
      <nav className="bg-teal-500 w-full top-0 z-20 py-4">
        <div className="items-center px-4 max-w-screen-xl mx-auto lg:flex">
          <div className="flex items-center justify-between py-1 lg:block">
            <Link href="/">
              <Image
                src="/assets/logo-simple.png"
                width={80}
                height={30}
                alt="logo"
              />
            </Link>
            <div className="lg:hidden">
              <button
                className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
              state ? 'h-screen pb-20 overflow-auto pr-4' : 'hidden'
            }`}
          >
            <div>
              <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
                {navigation.map((item, idx) => {
                  return (
                    <li key={idx} className="mt-4 lg:mt-0">
                      <Link
                        href={item.path}
                        className={`${
                          router.pathname === item.path
                            ? 'underline underline-offset-8'
                            : ''
                        } py-3 px-1 text-center border text-white hover:text-teal-800 rounded-md block lg:inline lg:border-0`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  )
                })}
                <li className="mt-2 lg:mt-0">
                  <RedirectionButton
                    href="/inscription"
                    content="INSCRIPTION"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
