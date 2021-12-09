import React from 'react'
import about from '../img/about.png'
import '../styles/about.scss'
import { BsArrowRight } from 'react-icons/bs'
import { Slider } from './glide'
import { SlideMulti } from './slideMulti'

export const AboutUs = ({ slides }) => {
  return (
    <div id="AboutUs" className="about_Wrapper">
      <div className="about_container">
        <div className="about_imgWrapper">
          <div className="react-reveal">
            <img src={about} />
          </div>
        </div>
        <div className="about_TextWrapper">
          <div className="react-reveal">
            <h2 className="Heading_Wrapper">
              Hi, Meet <br /> Concrete Squarefeet
            </h2>
          </div>
          <div className="react-reveal">
            <p className="Text_TextWrapper">
              Your interior should still represent your style and feel like a
              place you want to unwind in. No matter how large your space is or
              what your design preference is, these designer examples are
              designed to inspire you. No matter what your choices are, customer
              satisfaction is our desired goal.
            </p>
          </div>
          <div className="react-reveal">
            <p className="Text__TextWrapper-sc-1vevv34-0 jpKUCY">
              When considering the design of your bedroom, it’s important to
              keep in mind both aesthetics and functionality. If storage is a
              primary concern, it is important to integrate the right cupboards
              and wardrobes into your design.
            </p>
          </div>
          <div className="react-reveal">
            <a className="learn__more-btn" href="/interior#1">
              <span className="btn_text">VISITE SITE</span>
              <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
      {/* <Slider>
        <h2>slider1</h2>
        <h2>slider2</h2>
        <h2>slider3</h2>
        <h2>slider4</h2>
        <h2>slider5</h2>
      </Slider> */}
      <SlideMulti display={3}>
        <h2>slider1</h2>
        <h2>slider2</h2>
        <h2>slider3</h2>
        <h2>slider4</h2>
        <h2>slider5</h2>
      </SlideMulti>
    </div>
  )
}
