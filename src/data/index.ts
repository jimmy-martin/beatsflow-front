export type Beat = {
  title: string
  audioUrl: string
  imageUrl: string
  username: string
  categoryName: string
}

export const homeBeats = [
  {
    title: 'Son 1',
    audioUrl: '/beats/reflected-light-147979.mp3',
    username: 'totoonthebeat',
    categoryName: 'Trap',
    imageUrl: '/assets/reflected-light.webp',
  },
  {
    title: 'Son 2',
    audioUrl: '/beats/a-call-to-the-soul-149262.mp3',
    username: 'totoonthebeat',
    categoryName: 'Rap',
    imageUrl: '/assets/placeholders/home-beats-placeholder.png',
  },
  {
    title: 'Son 3',
    audioUrl: '/beats/reflected-light-147979.mp3',
    username: 'toto',
    categoryName: 'Drill',
    imageUrl: '/assets/reflected-light.webp',
  },
  {
    title: 'Son 4',
    audioUrl: '/beats/my-universe-147152.mp3',
    username: 'totoonthebeat',
    categoryName: 'Afro',
    imageUrl: '/assets/placeholders/home-beats-placeholder.png',
  },
]

// export const beatPlayed = homeBeats[2]

export const beatPlayed: Beat = {
  title: '',
  audioUrl: '',
  imageUrl: '',
  username: '',
  categoryName: '',
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

export const homeCategories = [
  { name: 'Trap', imageUrl: '/assets/categories/trap.png' },
  { name: 'Drill', imageUrl: '/assets/categories/drill.png' },
  { name: 'Afro', imageUrl: '/assets/categories/afro.png' },
  { name: 'Cloud', imageUrl: '/assets/categories/cloud.png' },
  { name: 'Rock', imageUrl: '/assets/categories/rock.png' },
]
