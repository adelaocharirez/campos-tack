import { useState } from 'react'
import { GALLERY, type Category } from '../data/gallery'
import './Gallery.css'

type Filter = 'all' | Category

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'racing', label: 'Racing and horse gear' },
  { value: 'caps', label: 'Caps' },
]

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>('all')

  const items =
    filter === 'all' ? GALLERY : GALLERY.filter(item => item.categories.includes(filter))

  return (
    <section className="work" id="work">
      <div className="wrap">
        <h2>Our work</h2>
        <p className="lede">
          Stables, crews, and teams wear what we stitch. Pick a piece you like and we will make it with your logo.
        </p>

        <div className="filters" role="group" aria-label="Filter our work">
          {FILTERS.map(f => (
            <button
              key={f.value}
              type="button"
              aria-pressed={filter === f.value}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid">
          {items.map(item => (
            <article className="card" key={item.title}>
              <img src={item.src} alt={item.title} loading="lazy" />
              <div className="card-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a className="btn btn-line btn-sm" href="#design">Get this with your logo</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}