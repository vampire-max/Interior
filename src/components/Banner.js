import React from 'react'
import '../styles/banner.scss'
import slider1 from '../img/slider1.png'
import slider2 from '../img/slider2.png'
import slider3 from '../img/slider3.png'
import { SlideMulti } from './slideMulti'

const Banner = () => {
  return (
    <div className="Banner_banner-wrapper">
      <div className="Banner_container">
        <div className="Banner_contentArea">
          <div className="react-reveal">
            <p className="Banner_Text">
              <strong>25%</strong>
              DISCOUNT ON YOUR FIRST DESIGN
            </p>
          </div>
          <div className="react-reveal">
            <h1 className="Banner_title">We craft affordable design</h1>
          </div>
          <div className="react-reveal">
            <p className="Text_Wrapper">
              Your interior should still represent your style. No matter how
              large your space is or what your design preference is, these
              designer examples are designed to inspire you.
            </p>
          </div>
          <div className="react-reveal">
            <form className="Banner_FormWrapper">
              <div className="Banner_inputField">
                <input
                  type="text"
                  placeholder="Enter email address"
                  required
                  aria-label="email"
                />
                <span className="left-icon">
                  <i fill="currentColor">
                    <svg
                      fill="currentColor"
                      height="16"
                      width="16"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M64,128v256h384V128H64z M256,267.9L93.2,144h325.6L256,267.9z M80,368V154.1l115.1,87.6L127,319l2,2l78.9-69.6L256,288
                    l48.1-36.6L383,321l2-2l-68.1-77.4L432,154.1V368H80z"
                      ></path>
                    </svg>
                  </i>
                </span>
              </div>
              <div className="Banner_ButtonGroup">
                <button className="Button_1">
                  <span className="btn-text">free consult</span>
                </button>
                <button className="Button_2">
                  <span className="btn-text">EXPLORE MORE</span>
                  <span className="btn-icon">
                    <i className="flaticon-next"></i>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="Banner_CarouselArea">
          <div className="carousel-swipeable" id="interior_carousel">
            <div className="glide_track">
              <div className="glide_slider">
                <SlideMulti display={3}>
                  <div className="glide_slide">
                    <a className="item_wrapper">
                      <img src={slider1} />
                    </a>
                  </div>
                  <div className="glide_slide">
                    <a className="item_wrapper">
                      <img src={slider2} />
                    </a>
                  </div>
                  <div className="glide_slide">
                    <a className="item_wrapper">
                      <img src={slider3} />
                    </a>
                  </div>
                </SlideMulti>
              </div>
            </div>
            <div className="glide_controlButton_wrapper">
              <div className="glide_prev"></div>
              <div className="glide_next"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
