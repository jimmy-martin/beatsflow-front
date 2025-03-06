import HomeSections from '../HomeSections'
import RedirectionButton from '../RedirectionButton'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section className="bg-gray-50 relative">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/assets/hero-image.png"
            alt="Hero background"
            fill={true}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            priority
          />
        </div>
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center relative">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <strong className="font-extrabold text-white sm:block">
                BEATS FLOW
              </strong>
            </h1>
            <p className="text-white text-xl my-8">
              Donner du pouvoir aux beatmakers, inspirer les artistes.
            </p>
            <RedirectionButton href="/inscription" content="Nous rejoindre" />
          </div>
        </div>
      </section>
      <HomeSections />
    </>
  )
}
