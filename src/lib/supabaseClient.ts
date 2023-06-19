import { Database } from '@/types/supabase'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or anonymous key')
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

export const getConnectedUser = async () => {
  const { data, error } = await supabase.auth.getSession()

  if (error) {
    throw new Error(error.message)
  }

  return data.session?.user
}

export const getConnectedUserFullInfo = async () => {
  const supabaseUser = await getConnectedUser()

  if (!supabaseUser) {
    return null
  }

  const { data: user, error } = await supabase
    .from('user')
    .select('*')
    .eq('id', supabaseUser.id)
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return { user, supabaseUser }
}

export const getUserInfo = async (id: string) => {
  const { data } = await supabase.from('user').select('*').eq('id', id).single()

  return data
}
