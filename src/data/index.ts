import { BeatInterface } from '@/types/beat'

export const defaultEmptyBeat: BeatInterface = {
  id: 0,
  title: '',
  url: '',
  image_url: '',
  price: 0,
  tempo: 0,
  description: '',
  created_at: '',
  updated_at: '',
  user_id: '0',
  category_id: 0,
  stripe_id: '',
  user: {
    id: '',
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    avatar_url: '',
    created_at: '',
    updated_at: '',
  },
  category: {
    id: 0,
    name: '',
    description: '',
    image_url: '',
    created_at: '',
    updated_at: '',
  },
}

export const posts = [
  {
    title: 'Beatmaking pour les débutants',
    content:
      "Plongez dans l'univers passionnant du beatmaking. Apprenez à créer vos propres rythmes, à manipuler des échantillons et à composer des mélodies accrocheuses.",
    imageUrl:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    date: '6 Janvier 2023',
    href: '#',
  },
  {
    title: 'Les meilleures applications de beatmaking',
    content:
      'Explorez notre sélection des meilleures applications de beatmaking pour produire de la musique où que vous soyez, que vous soyez sur iOS ou Android.',
    imageUrl:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    date: '22 Janvier 2023',
    href: '#',
  },
  {
    title: 'Les principes de base du mixage',
    content:
      "Le mixage est une étape cruciale de la production musicale. Découvrez comment équilibrer les niveaux, gérer l'espace stéréo et appliquer les effets pour un mixage parfait.",
    imageUrl:
      'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    date: '8 Mars 2023',
    href: '#',
  },
]
