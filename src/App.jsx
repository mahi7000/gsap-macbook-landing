import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Showcase from './components/Showcase'
import Highlights from './components/Highlights'
import Footer from './components/Footer'
import Features from './components/Features'
import Performance from './components/Performance'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
        <NavBar />
        <Hero />
        <ProductViewer />
        <Showcase />
        <Performance />
        <Features />
        <Highlights />
        <Footer />
    </main>
  )
}

export default App