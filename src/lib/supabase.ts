import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const uploadPhoto = async (file: File) => {
  const fileExt = file.name.split('.').pop()
  const fileName = `${Math.random()}.${fileExt}`
  const filePath = `memories/${fileName}`

  const { data, error } = await supabase.storage
    .from('photos')
    .upload(filePath, file)

  if (error) {
    throw error
  }

  const { data: { publicUrl } } = supabase.storage
    .from('photos')
    .getPublicUrl(filePath)

  return publicUrl
}