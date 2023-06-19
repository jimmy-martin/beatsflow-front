import SeeMoreButton from '@/components/SeeMoreButton'
import React from 'react'

type HomeSectionProps = {
  title: string
  children: React.ReactNode
  seeMoreHref: string
}

export default function HomeSection({
  title,
  children,
  seeMoreHref,
}: HomeSectionProps) {
  return (
    <section>
      <h2 className="text-center text-xl text-black font-bold my-10">
        {title}
      </h2>
      {children}
      <SeeMoreButton href={seeMoreHref} content="Voir plus" />
    </section>
  )
}
