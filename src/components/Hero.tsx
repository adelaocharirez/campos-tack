import './Hero.css'

export default function Hero() {
  return (
    <section className="hero dark">
      <div className="wrap">
        <h1 className="stitch" aria-label="Campos Tack and Embroidery">
          <span className="line l1" aria-hidden="true">
            <span className="txt">Campos Tack</span><i className="needle" />
          </span>
          <span className="line l2" aria-hidden="true">
            <span className="txt">&amp; Embroidery</span><i className="needle" />
          </span>
        </h1>
        <div className="run" aria-hidden="true" />
        <p className="hero-sub">
          Custom embroidery for race stables and businesses. Caps, jackets, and gear in bulk orders.
        </p>
        <div className="hero-cta">
          <a className="btn btn-red" href="#design">Design your cap</a>
          <a className="btn btn-line" href="#work">See our work</a>
        </div>
      </div>
    </section>
  )
}