import React from 'react'
import { SlideMulti } from './slideMulti'
import '../styles/gallery.scss'
import gallery1 from '../img/gallary1.jpg'
import gallery2 from '../img/gallary2.jpg'
import gallery3 from '../img/gallary3.jpg'
import gallery4 from '../img/gallary4.jpg'

export const Gallery = () => {
  const responsive = {
    1300: 4,
    768: 3,
    480: 2,
  }
  return (
    <div id="gallery" className="gallery_wrapper">
      <SlideMulti responsive={responsive}>
        <div className="galleryCard">
          <a draggable="true" data-href="/interior#" href="/interior#">
            <img
              src={gallery1}
              alt="Living"
              class="Image__ImageWrapper-sc-1lwf601-0 liulOm"
            />
            <button class="gallerystyle__Button-sc-3s7v6k-2 bmMovO read_more__btn">
              <span class="arrow"></span>Living
            </button>
          </a>
        </div>
        <div className="galleryCard">
          <a draggable="true" data-href="/interior#" href="/interior#">
            <img
              src={gallery2}
              alt="Living"
              class="Image__ImageWrapper-sc-1lwf601-0 liulOm"
            />
            <button class="gallerystyle__Button-sc-3s7v6k-2 bmMovO read_more__btn">
              <span class="arrow"></span>Living
            </button>
          </a>
        </div>
        <div className="galleryCard">
          <a draggable="true" data-href="/interior#" href="/interior#">
            <img
              src={gallery3}
              alt="Living"
              class="Image__ImageWrapper-sc-1lwf601-0 liulOm"
            />
            <button class="gallerystyle__Button-sc-3s7v6k-2 bmMovO read_more__btn">
              <span class="arrow"></span>Living
            </button>
          </a>
        </div>
        <div className="galleryCard">
          <a draggable="true" data-href="/interior#" href="/interior#">
            <img
              src={gallery4}
              alt="Living"
              class="Image__ImageWrapper-sc-1lwf601-0 liulOm"
            />
            <button class="gallerystyle__Button-sc-3s7v6k-2 bmMovO read_more__btn">
              <span class="arrow"></span>Living
            </button>
          </a>
        </div>
      </SlideMulti>
    </div>
  )
}
