import Footer from '../Footer'
import Header from '../Header'
import Toast from '../Toast'
import useToastContext from '@/helpers/useToastContext'
import React from 'react'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { toast } = useToastContext()
  return (
    <>
      <Header />
      {children}
      {toast && <Toast message={toast} />}
      <Footer />
    </>
  )
}
