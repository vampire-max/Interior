import userEvent from '@testing-library/user-event'
import React, { useLayoutEffect, useRef, useState } from 'react'
import '../styles/about.scss'

export const SlideMulti = ({ children, display }) => {
  const [slides, setSlides] = useState(
    children?.length
      ? [
          ...[...children].splice(-display),
          ...[...children],
          ...[...children].splice(0, display),
        ]
      : [],
  )

  const [index, setIndex] = useState(display)
  const [slideWrapperStyle, setSlideWrapperStyle] = useState({})
  const [slideStyle, setSlideStyle] = useState({})

  const container = useRef()

  const firstRender = useRef(true)
  useLayoutEffect(() => {
    console.log('firstrender', firstRender)
    const containerWidth =
      container.current.getBoundingClientRect().width / display
    setSlideStyle({ width: containerWidth })
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
  }, [index])
  return (
    <div className="slider-container" ref={container}>
      <div className="slides-wrapper" style={slideWrapperStyle}>
        {slides.map((slide, i) => (
          <div key={i} className="slide" style={slideStyle}>
            {slide}
          </div>
        ))}
      </div>
      <div className="slider-control">
        <button
          // disabled={index === 0}
          onClick={
            () => {
              setIndex(index === 0 ? slides.length - 1 || 0 : index - 1)
              // console.log('previndex', index)
            }

            // setIndex(index === 0 ? slides?.length - 1 || 0 : index - 1)
          }
        >
          Prev
        </button>
        <button
          // disabled={index + 1 === slides?.length}
          onClick={() => {
            // console.log('length', slides.length)
            setIndex(index + 1 === slides?.length ? 0 : index + 1)
            // console.log('next index', index)
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}
