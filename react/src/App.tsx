
import Layout from "./components/Layout"
import Aboutus from "./components/sections/Aboutus"
import Brands from "./components/sections/Brands"
import CTA from "./components/sections/CallToAction"
import Hero from "./components/sections/Hero"
import Pricing from "./components/sections/Pricing"
import Services from "./components/sections/Services"



function App() {
  

  return (
    <>
     <Layout title="Landingpage">
      <Hero></Hero>
      <Brands></Brands>
      <Services></Services>
      <Aboutus></Aboutus>
      <Pricing></Pricing>
      <CTA></CTA>
      </Layout>
    </>
  )
}

export default App
