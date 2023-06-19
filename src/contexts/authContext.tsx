import { getUserInfo, supabase } from '@/lib/supabaseClient'
import { UserInterface } from '@/types/user'
import { User } from '@supabase/gotrue-js'
import { useRouter } from 'next/router'
import React, { createContext, useEffect, useState } from 'react'

type AuthContextType = {
  loggedUser: null | UserInterface
  isLoggedUser: boolean
  isLoadingUser: boolean
  register: (email: string, password: string, username: string) => Promise<void>
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  updateUser: (user: Partial<UserInterface>) => Promise<void>
}

type AuthProviderType = {
  children: React.ReactNode
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export default function AuthProvider({ children }: AuthProviderType) {
  const router = useRouter()
  const [loggedUser, setLoggedUser] = useState<null | UserInterface>(null)
  const [isLoggedUser, setIsLoggedUser] = useState<boolean>(false)
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>(true)

  const fetchUser = (user: User | null) => {
    if (user) {
      getUserInfo(user.id).then((data) => {
        setLoggedUser(data)
        setIsLoggedUser(true)
        setIsLoadingUser(false)
      })
    } else {
      setLoggedUser(null)
      setIsLoggedUser(false)
      setIsLoadingUser(false)
    }
  }

  useEffect(() => {
    supabase.auth.getSession().then((response) => {
      const user = response.data.session?.user
      fetchUser(user ?? null)
    })

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        fetchUser(session?.user ?? null)
      }
    )

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  const register = async (
    email: string,
    password: string,
    username: string
  ) => {
    const { data: supabaseUser, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      throw new Error(error.message)
    }

    if (supabaseUser && supabaseUser.user) {
      const { error: userError } = await supabase
        .from('user')
        .insert({ id: supabaseUser.user.id, email, username })

      if (userError) {
        throw new Error(userError.message)
      }

      router.push('/')
    }
  }

  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      throw new Error(error.message)
    }

    router.push('/')
  }

  const logout = async () => {
    await supabase.auth.signOut()
  }

  const updateUser = async (user: Partial<UserInterface>) => {
    if (!loggedUser) {
      throw new Error('User not logged in')
    }

    const { data, error } = await supabase
      .from('user')
      .update(user)
      .eq('id', loggedUser.id)
      .select('*')

    if (error) {
      throw new Error(error.message)
    }

    if (data && data.length > 0) {
      setLoggedUser(data[0])
    }
  }

  return (
    <AuthContext.Provider
      value={{
        loggedUser,
        isLoggedUser,
        isLoadingUser,
        register,
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
