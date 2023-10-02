import { FC } from 'react';
import { Project } from '../../../data/data';
import { GalleryWrapperD, ImageWrapper, TitleWrapper, SkeletonProject } from './GalleryFour.styles'



interface Props {
  gallery: Project[]

}

const GalleryFour: FC<Props> = ({ gallery }) => {

  return (
    <GalleryWrapperD>
      {gallery.map(project => (
        //<ImageWrapperOne key={image.id} $url={image.image} />
        <article key={project.id}>
          <ImageWrapper>
            <div />
            <img src={project.image} />
          </ImageWrapper>
          <TitleWrapper>
            <p>{project.title}</p>
          </TitleWrapper>
        </article>
      ))}
      <SkeletonProject>
        <div /> 
        <div>
          <p>Proyecto en construción</p>
        </div>
      </SkeletonProject>
    </GalleryWrapperD>
  )
}

export default GalleryFour
