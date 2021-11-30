import React, { useCallback, useEffect, useRef, useState } from 'react'
import navbar_logo from '../img/navbar_logo.svg'
import '../styles/header.scss'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BsListNested } from 'react-icons/bs'

const Header = () => {
  const [isSticky, setIsSticky] = useState('false')
  const ref = useRef(null)
  const handleScroll = () => {
    if (ref.current) {
      setIsSticky(ref.current.getBoundingClientRect().top > 10)
    }
    console.log(isSticky)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`navbar_wrapper ${isSticky ? '' : 'sticky_header'} `}
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
          <button className="navbar_button button_1">
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
  )
}

export default Header
