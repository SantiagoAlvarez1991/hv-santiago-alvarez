import { Main, ExperienceAndTraining } from "./App.styles"
import { About } from "./version1/components/About"
import { Contact } from "./version1/components/Contact"
import { Experience } from "./version1/components/Experience"
import { Footer } from "./version1/components/Footer"
import { Header } from "./components/Header"
//import { Social } from "./components/Social"
import { Talent } from "./version1/components/Talent"
import { Training } from "./version1/components/Training"




function App() {
  

  return (
    <Main>
      <Header />
      <About />
      <Talent />
      <ExperienceAndTraining>
        <Experience />
        <Training />
      </ExperienceAndTraining>
      <Contact />
      {/* <section>
        <Social />
      </section> */}
      <Footer />      
    </Main>
  )
}

export default App
