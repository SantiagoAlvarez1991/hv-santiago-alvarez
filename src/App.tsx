import { Main } from "./App.styles"
import { About } from "./components/About"
import { General } from "./components/General"
import { Header } from "./components/Header"



function App() {
  

  return (
    <Main>
      <Header />
      <About />
      <General />      
    </Main>
  )
}

export default App
