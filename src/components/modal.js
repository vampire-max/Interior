import React from 'react'
import { createPortal } from 'react-dom'
import '../styles/modal.scss'

export const Modal = ({ children, open, onClose, onBackdropClick }) => {
  if (!open) return null

  return createPortal(
    <div>
      <div className="modal_backdrop" onClick={() => onBackdropClick} />
      <div className="modal">{children}</div>
    </div>,
    document.querySelector('#portal'),
  )
}
