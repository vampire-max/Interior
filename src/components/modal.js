import React from 'react'
import { createPortal } from 'react-dom'
import modal_img from '../img/modal_img.jpg'
import '../styles/modal.scss'

export const Modal = ({ children, open, onClose }) => {
  if (!open) return null

  return createPortal(
    <div className="modal_wrapper">
      <div className="modal_component">
        <div className="modal_content">
          <div className="Box_wrapper"></div>
          {/* <img src={modal_img} /> */}
          <button onClick={onClose}>Close</button>
          <div className="Box"></div>
        </div>
      </div>
      {children}
    </div>,
    document.querySelector('#portal'),
  )
}
