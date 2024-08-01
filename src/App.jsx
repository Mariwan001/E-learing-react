import Banner from "./components/Banner/Banner"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import Subscribes from "./components/Subscribes/Subscribes"
import Banners2 from "./components/Banner/Banners2"
import Footer from "./components/Footer/Footer"





  const App = () => {
  return (
    <>
      <main className=" overflow-x-hidden bg-white text-dark">
        <Hero />  
        <Services />
        <Banner />
        <Subscribes />
        <Banners2 />
        <Footer />
      </main>
    </>
  )
}

export default App
