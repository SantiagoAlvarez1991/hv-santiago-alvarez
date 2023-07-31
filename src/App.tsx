import { Main } from "./App.styles"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Experience } from "./components/Experience"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
//import { Social } from "./components/Social"
import { Talent } from "./components/Talent"
import { Training } from "./components/Training"




function App() {
  

  return (
    <Main>
      <Header />
      <About />
      <Talent />
      <div>
        <Experience />
        <Training />
      </div>
      <Contact />
      {/* <section>
        <Social />
      </section> */}
      <Footer />      
    </Main>
  )
}

export default App
