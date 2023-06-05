import { BeatType } from '@/types/beat'

export const defaultEmptyBeat: BeatType = {
  id: 0,
  title: '',
  file_path: '',
  image_url: '',
  price: 0,
  tempo: 0,
  description: '',
  created_at: new Date(),
  updated_at: new Date(),
  user_id: 0,
  category_id: 0,
  user: {
    username: '',
  },
  category: {
    id: 0,
    name: '',
  },
}

export const posts = [
  {
    title: 'Lorem',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus ipsum. Donec libero eros, pulvinar et eleifend a, vulputate.',
    imageUrl:
      'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    date: 'Jan 4 2022',
    href: '#',
  },
  {
    title: 'Lorem',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus ipsum. Donec libero eros, pulvinar et eleifend a, vulputate.',
    imageUrl:
      'https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    date: 'Jan 4 2022',
    href: '#',
  },
  {
    title: 'Lorem',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus ipsum. Donec libero eros, pulvinar et eleifend a, vulputate.',
    imageUrl:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    date: 'Jan 4 2022',
    href: '#',
  },
]
