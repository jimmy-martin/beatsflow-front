import { createContext, useState } from 'react'

type ToastContextType = {
  toast: string | null
  showToast: (message: string) => void
}

type ToastProviderType = {
  children: React.ReactNode
}

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined
)

export default function ToastProvider({ children }: ToastProviderType) {
  const [toast, setToast] = useState<string | null>(null)

  const showToast = (message: string) => {
    setToast(message)
    setTimeout(() => {
      setToast(null)
    }, 3000)
  }

  return (
    <ToastContext.Provider value={{ toast, showToast }}>
      {children}
    </ToastContext.Provider>
  )
}
