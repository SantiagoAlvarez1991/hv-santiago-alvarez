import logo from '../../assets/isotipo.svg'
import { GoDown } from '../Icons'
import { HeaderWrapper, Subtitle, ImageWrapper } from './Header.styles'


const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <ImageWrapper>
          <img src={logo} alt='logo'/>
        </ImageWrapper>

        <h2>Santiago</h2>
        <Subtitle>
          <h2>Alvarez Eraso</h2>
          <h1>Desarrollador Front End</h1>
          <p>Diseñador Gráfico</p>
        </Subtitle>
      </div>
      <a href='#about'>
        <GoDown/>
      </a>


    </HeaderWrapper>
  )
}

export default Header
