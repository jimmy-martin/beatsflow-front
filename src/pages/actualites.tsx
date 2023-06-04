import AudioPlayer from '@/components/AudioPlayer'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { beatPlayed } from '@/data'

export default function News() {
  return (
    <>
      <Header />
      <h1>Actualités</h1>
      <AudioPlayer beat={beatPlayed} />
      <Footer />
    </>
  )
}
