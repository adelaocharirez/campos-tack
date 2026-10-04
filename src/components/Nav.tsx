import './Nav.css'

export default function Nav() {
  return (
    <header className="nav dark">
      <div className="wrap nav-inner">
        <img src="/images/logo.jpg" alt="Campos Tack and Embroidery logo" />
        <a className="btn btn-red btn-sm" href="#quote">Get a quote</a>
      </div>
    </header>
  )
}