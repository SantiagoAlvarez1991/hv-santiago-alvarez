import { FC, useEffect, useRef, useState } from 'react';
import Bullets from './Bullets/Bullets';
import { CarruselC, GalleryWrapperC, ImageC, ImageWrapperC } from './GalleryThree.styles';

interface ImageI {
  id: number;
  image: string
}

interface Props {
  gallery: ImageI[];
}

const GalleryThree: FC<Props> = ({ gallery }) => {


  const [currentImage, setCurrentImage] = useState(1)
  const carruselRef = useRef<HTMLDivElement>(null)
  const [checkpoints, setCheckpoints] = useState<number[]>([])
  const [carruselWidth, setCarruselWidth] = useState<number>()

  
  useEffect(() => {
    if (carruselRef.current) {
      setCarruselWidth(Math.trunc(carruselRef.current.getBoundingClientRect().width))
      gallery.forEach((images, index) => {
        !!carruselWidth && setCheckpoints(prev => [...prev, index * carruselWidth])
      })
    }
  }, [gallery, carruselWidth])

  useEffect(() => {
    carruselRef.current?.addEventListener("scroll", () => {
      if(carruselRef.current){
        const galleryScroll = Math.trunc(carruselRef.current?.scrollLeft)

        checkpoints.find((number, index) => {     
          if (carruselWidth !== undefined) {
            if (galleryScroll > ((number) - (carruselWidth / 2)) && galleryScroll < number) {
              setCurrentImage(index + 1)
            }
            if (galleryScroll > ((number) - carruselWidth) && galleryScroll < ((number) - (carruselWidth / 2))) {
              setCurrentImage(index)
            }
          }
        })
      }

    }, { passive: true });
  }, [checkpoints, carruselWidth, currentImage]);

  useEffect(() => {
    window.addEventListener('resize', () => {      
      if (carruselRef.current) {
        setCarruselWidth(Math.trunc(carruselRef.current.getBoundingClientRect().width))
        setCheckpoints([])

        gallery.forEach((images, index) => {
          !!carruselWidth && setCheckpoints(prev => [...prev, index * carruselWidth])
        })       
      }
    });
  }, [carruselWidth, gallery])


  return (    
      <GalleryWrapperC>
        <CarruselC ref={carruselRef}>
          {gallery.map(image => (
            <ImageWrapperC key={image.id} >
              <ImageC src={image.image} />
            </ImageWrapperC>
          ))}
        </CarruselC>       
        <Bullets gallery={gallery} currentImage={currentImage - 1}/>
      </GalleryWrapperC>    
  )
}

export default GalleryThree
