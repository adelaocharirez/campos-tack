import './Strip.css'

const ITEMS = ['Caps', 'Jackets', 'T-shirts', 'Horse gear', 'Decals', 'and more']

export default function Strip() {
  return (
    <div className="strip">
      <ul className="wrap">
        {ITEMS.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}