import React, { useCallback, useRef, useState } from 'react'
import navbar_logo from '../img/navbar_logo.svg'
import '../styles/header.scss'
import { BsSearch } from 'react-icons'
import { AiOutlineUser } from 'react-icons'
import { BsListNested } from 'react-icons'

const Header = () => {
  const [isSticky, setIsSticky] = useState('false')

  window.onscroll = function () {
    scrollFunction()
  }

  function scrollFunction() {
    var showAfter = 10
    if (this.scrollTop() > showAfter) {
      setIsSticky(true)
    }
  }
  return (
    <div className={`navbar_wrapper ${isSticky ? 'sticky_header' : ''} `}>
      <div className="navbar_container">
        <a href="/interior" className="Link_wrapper">
          <img src={navbar_logo} className="navbar_logo" />
        </a>
        <div className="navbar_btns">
          <button className="navbar_button button_1">
            <span className="btn-icon">
              <BsSearch />
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

export default Head