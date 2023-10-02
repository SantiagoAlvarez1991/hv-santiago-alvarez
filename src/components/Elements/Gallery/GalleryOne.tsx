import { FC } from 'react';
import { GalleryWrapperOne, ImageWrapperOne } from './GalleryOne.styles';

interface Image {
  id: number;
  image: string
}

interface Props {
  gallery: Image[];
  galleryId: string;
}

const GalleryOne: FC<Props> = ({ gallery, galleryId }) => {

return (
    <GalleryWrapperOne id={galleryId}>
      {gallery.map(image => (
        <ImageWrapperOne key={image.id} $url={image.image} />
      ))}
    </GalleryWrapperOne>
  )
}

export default GalleryOne
