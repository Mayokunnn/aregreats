import Header from "./sections/header"
import Hero from "./sections/hero"
import Services from "./sections/services"
import Products from "./sections/products"
import About from "./sections/about"
import ImpactStories from "./sections/impact-stories"
import Contact from "./sections/contact"
import Footer from "./sections/footer"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Products />
      <About />
      <ImpactStories />
      <Contact />
      <Footer />
    </>
  )
}
