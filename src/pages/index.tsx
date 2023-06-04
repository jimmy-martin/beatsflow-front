import AudioPlayer from '@/components/AudioPlayer'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Home from '@/components/Home'
import { beatPlayed } from '@/data'

export default function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <AudioPlayer beat={beatPlayed} />
      <Footer />
    </>
  )
}
