import React, { useEffect, useRef, useState } from 'react'
import navbar_logo from '../img/navbar_logo.svg'
import '../styles/header.scss'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BsListNested } from 'react-icons/bs'

const Header = ({ setOpen }) => {
  const [isSticky, setIsSticky] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      // if (window.scrollY >= 30) {
      //   setIsSticky(true)
      //   console.log(window.scrollY)
      // } else {
      //   setIsSticky(false)
      // }
      setIsSticky(window.scrollY >= 30)
      // console.log(isSticky)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <div
        className={`navbar_wrapper ${isSticky ? 'sticky_header' : ''} `}
        ref={ref}
      >
        {/* <div className="navbar_wrapper"> */}
        <div className="navbar_container">
          <a href="/interior" className="Link_wrapper">
            <img src={navbar_logo} className="navbar_logo" />
          </a>
          <div className="navbar_btns">
            <button className="navbar_button button_1">
              <span className="btn-icon">
                <AiOutlineSearch />
              </span>
            </button>
            <button
              className="navbar_button button_1"
              onClick={() => {
                setOpen(true)
              }}
            >
              <span className="btn-icon">
                <AiOutlineUser />
              </span>
            </button>
            <button className="navbar_button button_1">
              <span className="btn-icon">
                <BsListNested />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
