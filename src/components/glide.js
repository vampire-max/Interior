import React, { useEffect } from 'react'
import '../styles/about.scss'
import { useLayoutEffect, useRef, useState } from 'react'

export const Slider = ({ children, display }) => {
  const [slides, setSlides] = useState(
    children?.length
      ? [children[children.length - 1], ...children, children[0]]
      : [],
  )
  // const [display, setDisplay] = useState(0)
  const [index, setIndex] = useState(1)
  const container = useRef()
  const [slideWrapperStyle, setSlideWrapperStyle] = useState({})
  const [slideStyle, setSlideStyle] = useState({})

  useLayoutEffect(() => {
    const { width: containerWidth } = container.current.getBoundingClientRect()
    console.log('containerWidth', containerWidth)
    setSlideStyle({ width: containerWidth / display })
    if (index === 0) {
      setSlideWrapperStyle({
        width: (containerWidth * slides.length) / display,
        transform: `translateX(-${
          (containerWidth / display) * (slides.length - 1)
        }px)`,
        transition: 'none',
      })
      setIndex(slides.length - 1)
      console.log('1', slideWrapperStyle)
    } else if (index === slides.length - display) {
      console.log('slider.index', slides.index)
      console.log('index', index)
      setSlideWrapperStyle({
        width: (containerWidth * slides.length) / display,
        transform: `translateX(0px)`,
        transition: 'none',
      })
      setIndex(1)
      console.log('2', slideWrapperStyle)
    } else {
      setSlideWrapperStyle({
        width: (containerWidth * slides.length) / display,
        transform: `translateX(-${(containerWidth * index) / display}px)`,
      })
      console.log('3', slideWrapperStyle)
    }
  }, [index])
  // useLayoutEffect(() => {
  //   const { width: containerWidth } = container.current.getBoundingClientRect()
  //   console.log(containerWidth)
  //   setSlideStyle({ width: containerWidth })
  //   setSlideWrapperStyle({
  //     width: containerWidth * slides.length,
  //     transform: `translateX(-${containerWidth * index}px)`,
  //   })
  // }, [index])

  return (
    <div className="slider-container" ref={container}>
      <div className="slides-wrapper" style={slideWrapperStyle}>
        {slides.map((slide, i) => (
          <div key={i} className="slide" style={slideStyle}>
            {slide}
          </div>
        ))}
      </div>
      <button
        // disabled={index === 0}
        onClick={() =>
          setIndex(index === 0 ? slides?.length - 1 || 0 : index - 1)
        }
      >
        Prev
      </button>
      <button
        // disabled={index + 1 === slides?.length}
        onClick={() => {
          console.log(index)
          setIndex(index + 1 === slides?.length ? 0 : index + 1)
        }}
      >
        Next
      </button>
    </div>
  )
}
