import { FC, useState, } from 'react';
import Bullets from './Bullets/Bullets';
import { GalleryGrapperB, CarruselB, ImageB } from './GalleryTwo.styles';

interface Image {
    id: number;
    image : string
}

interface Props {
    gallery: Image[];
}


const GalleryTwo : FC<Props>= ({gallery}) => {

    const [currentImage, setCurrentImage] = useState(0)

    const handlePrev = () => {
        setCurrentImage(prev => prev - 1)
    }

    const handleNext = () => {
        setCurrentImage(prev => prev + 1)
    }

    return (
        <GalleryGrapperB>
            <CarruselB  $currentImage={currentImage}>
                <div>
                {gallery.map(image => (
                    <ImageB key={image.id} $url={image.image}/>
                ))}
                </div>
                <button type="button" disabled={currentImage <= 0} onClick={() => handlePrev()}>anterior</button>
                <button type="button" disabled={gallery.length === (currentImage + 1)} onClick={() => handleNext()}>siguiente</button>
            </CarruselB>            
            <Bullets gallery={gallery} currentImage={currentImage}/>
        </GalleryGrapperB>
    )
}

export default GalleryTwo
