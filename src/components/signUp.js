import React from 'react'
import modal_img from '../img/modal_img.jpg'
import form_logo from '../img/signUp_logo.png'
import { AiOutlineClose } from 'react-icons/ai'

export const SignUP = ({ setOpen }) => {
  return (
    <div>
      <button className="button modal_closeBtn" onClick={() => setOpen(false)}>
        <span className="close_btn_icon">
          <AiOutlineClose />
        </span>
      </button>
      <div className="modal_wrapper">
        <div className="modal_component">
          <div className="modal_content">
            <div className="Box_wrapper img">
              <img src={modal_img} className="modal_img" />
            </div>
            {/* <button onClick={onClose}>Close</button> */}
            <div className="Box_wrapper">
              <div className="Form_wrapper">
                <img src={form_logo} className="pattern_image" />
                <div className="rc-tabs margin-top">
                  <div className="rc-tabs-nav">LOGIN</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
