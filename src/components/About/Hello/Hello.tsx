//import foto from '../../../assets/foto.png'
//import fotoSantiago from '../../../assets/fotoSantiago.png'
import { Social } from '../../Social'
import { ImageWrapper, Wellcome, ContactWrapper } from './Hello.styles'
import { BsWhatsapp } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

const Hello = () => {
  return (
    <section>
      <Wellcome>
        <p>Hola</p>
        <Social />
      </Wellcome>
      <ImageWrapper>
        {/* <img src={fotoSantiago} />         */}
        <img src={'/fotoSantiago.png'} />        
        <p>Aquí vas a encontrar infromación de mi trabajo y experiencia como <span>desarrollador Front End.</span></p>
      </ImageWrapper>
      <ContactWrapper>        
        <a href='https://wa.link/de7yfe' target='_blank'><BsWhatsapp/><span>Escríbeme</span></a>
        <button><HiOutlineMail/><span>Envíame un email</span></button>
      </ContactWrapper>
    </section>
  )
}

export default Hello