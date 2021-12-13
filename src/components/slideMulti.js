import React from 'react'
import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import '../styles/glide.scss'

export const SlideMulti = ({ children, responsive }) => {
  const [display, setDisplay] = useState(null)
  const [slides, setSlides] = useState(null)
  const [index, setIndex] = useState(null)
  const [slideWrapperStyle, setSlideWrapperStyle] = useState({})
  const [slideStyle, setSlideStyle] = useState({})

  const container = useRef()

  const firstRender = useRef(true)

  useEffect(() => {
    if (display) {
      setSlides(
        children?.length
          ? [
              ...[...children].splice(-display),
              ...[...children],
              ...[...children].splice(0, display),
            ]
          : [],
      )
      setIndex(display)
      console.log('disp', display)
    }
  }, [display])

  const handleResponsive = () => {
    const resizeWidth = window.innerWidth
    if (responsive) {
      let displayNum = 1
      if (resizeWidth >= 1300) {
        displayNum = responsive['1300']
      } else if (resizeWidth <= 768) {
        displayNum = responsive['480']
      } else {
        displayNum = responsive['768']
      }
      setDisplay(displayNum)
    }
  }

  useLayoutEffect(() => {
    const containerWidth =
      container.current.getBoundingClientRect().width / display

    setSlideStyle({ width: containerWidth })
    if (index !== null && display !== null) {
      if (index < display) {
        setSlideWrapperStyle({
          width: containerWidth * (children.length + display * 2),
          transform: `translateX(-${
            containerWidth * (children.length + display)
          }px)`,
          transition: 'none',
        })
        setIndex(children.length + display - 1)
      } else if (index > children.length + display) {
        setSlideWrapperStyle({
          width: containerWidth * slides.length,
          transform: `translateX(-${containerWidth * display}px)`,
          transition: 'none',
        })
        setIndex(display + 1)
      } else {
        setSlideWrapperStyle({
          width: containerWidth * slides.length,
          transform: `translateX(-${containerWidth * index}px)`,
          ...(firstRender.current && { transition: 'none' }),
        })
        firstRender.current = false
      }
    }
  }, [index, display])

  useEffect(() => {
    window.addEventListener('resize', handleResponsive())

    return () => {
      window.removeEventListener('resize', handleResponsive())
    }
  }, [])

  return (
    <div className="slider-container" ref={container}>
      <div className="slides-wrapper" style={slideWrapperStyle}>
        {slides &&
          slides.map((slide, i) => (
            <div key={i} className="slide" style={slideStyle}>
              {slide}
            </div>
          ))}
      </div>
      <div className="slider-control">
        <div
          className="control-prev"
          // disabled={index === 0}
          onClick={
            () => {
              setIndex(index === 0 ? slides.length - 1 || 0 : index - 1)
              // console.log('previndex', index)
            }

            // setIndex(index === 0 ? slides?.length - 1 || 0 : index - 1)
          }
        ></div>
        <div
          className="control-next"
          // disabled={index + 1 === slides?.length}
          onClick={() => {
            // console.log('length', slides.length)
            setIndex(index + 1 === slides?.length ? 0 : index + 1)
            // console.log('next index', index)
          }}
        ></div>
      </div>
    </div>
  )
}
