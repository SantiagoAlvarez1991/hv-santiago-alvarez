import { FC } from 'react';
import { Bullet, BulletWrapper } from './Bullets.styles';

interface ImageI {
    id: number;
    image: string
  }

interface Props {
    gallery: ImageI[];
    currentImage: number
  }

const Bullets : FC<Props> = ({gallery, currentImage}) => {
    return (
        <BulletWrapper>
            {gallery.map((image, index) => (
                <Bullet key={index} $isActive={index === (currentImage)} />
            ))}
        </BulletWrapper>
    )
}

export default Bullets
