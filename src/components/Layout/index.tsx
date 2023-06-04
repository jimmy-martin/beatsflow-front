import AudioPlayer from '../AudioPlayer'
import Footer from '../Footer'
import Header from '../Header'
import { AudioContext } from '@/contexts/audioContext'
import React, { useContext } from 'react'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
