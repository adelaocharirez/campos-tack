export type Category = 'racing' | 'caps'

export type GalleryItem = {
  src: string
  title: string
  description: string
  categories: Category[]
}

export const GALLERY: GalleryItem[] = [
  {
    src: '/images/work/raza.jpg',
    title: 'Cuadra La Raza',
    description: 'Silks, hood, and tack in matching colors.',
    categories: ['racing'],
  },
  {
    src: '/images/work/rancho.jpg',
    title: 'Cuadra Rancho Unido',
    description: 'Trucker caps in team colors with a stitched crest.',
    categories: ['caps', 'racing'],
  },
  {
    src: '/images/work/varilleros.jpg',
    title: 'Varilleros Racing Stables',
    description: 'Black foam trucker caps in two thread colors.',
    categories: ['caps', 'racing'],
  },
]