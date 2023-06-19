export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      beat: {
        Row: {
          category_id: number
          created_at: string
          description: string | null
          id: number
          image_url: string
          price: number
          stripe_id: string | null
          tempo: number | null
          title: string
          updated_at: string | null
          url: string
          user_id: string
        }
        Insert: {
          category_id: number
          created_at?: string
          description?: string | null
          id?: number
          image_url?: string
          price: number
          stripe_id?: string | null
          tempo?: number | null
          title: string
          updated_at?: string | null
          url: string
          user_id: string
        }
        Update: {
          category_id?: number
          created_at?: string
          description?: string | null
          id?: number
          image_url?: string
          price?: number
          stripe_id?: string | null
          tempo?: number | null
          title?: string
          updated_at?: string | null
          url?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'beat_category_id_fkey'
            columns: ['category_id']
            referencedRelation: 'category'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'beat_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'user'
            referencedColumns: ['id']
          }
        ]
      }
      category: {
        Row: {
          created_at: string
          description: string | null
          id: number
          image_url: string
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          image_url: string
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          image_url?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      user: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string
          first_name: string | null
          id: string
          last_name: string | null
          updated_at: string | null
          username: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email: string
          first_name?: string | null
          id: string
          last_name?: string | null
          updated_at?: string | null
          username: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          updated_at?: string | null
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: 'user_id_fkey'
            columns: ['id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
