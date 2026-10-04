import Nav from './components/Nav'
import Hero from './components/Hero'
import Strip from './components/Strip'
import Gallery from './components/Gallery'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Strip />
        <Gallery />
      </main>
    </>
  )
}