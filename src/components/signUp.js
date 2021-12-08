import React from 'react'
import modal_img from '../img/modal_img.jpg'
import form_logo from '../img/signUp_logo.png'
import { AiOutlineClose } from 'react-icons/ai'

export const SignUP = ({ setOpen, open }) => {
  // const handleClose = setOpen(false)

  return (
    <>
      <button
        className="button modal_closeBtn"
        onClick={() => {
          setOpen(false)
          console.log('setopen', setOpen())
        }}
      >
        <span className="close_btn_icon">
          <AiOutlineClose />
        </span>
      </button>
      <div className="modal_wrapper">
        <div className="modal_component">
          <div className="modal_content">
            <div className="Box_wrapper imgCol">
              <img src={modal_img} className="pattern_image" />
            </div>
            {/* <button onClick={onClose}>Close</button> */}
            <div className="Box_wrapper FormCol">
              <div className="Form_wrapper">
                <img src={form_logo} className="form_logo" />
                <div className="rc-tabs margin-top">
                  <div className="rc-tabs-nav">
                    <div class="rc-tabs-nav-wrap">
                      <div
                        class="rc-tabs-nav-list"
                        style="transform: translate(0px, 0px);"
                      >
                        <div class="rc-tabs-tab rc-tabs-tab-active">
                          <div
                            role="tab"
                            aria-selected="true"
                            class="rc-tabs-tab-btn"
                            tabindex="0"
                            id="rc-tabs-25-tab-loginForm"
                            aria-controls="rc-tabs-25-panel-loginForm"
                          >
                            LOGIN
                          </div>
                        </div>
                        <div class="rc-tabs-tab">
                          <div
                            role="tab"
                            aria-selected="false"
                            class="rc-tabs-tab-btn"
                            tabindex="0"
                            id="rc-tabs-25-tab-registerForm"
                            aria-controls="rc-tabs-25-panel-registerForm"
                          >
                            REGISTER
                          </div>
                        </div>
                        <div
                          class="rc-tabs-ink-bar rc-tabs-ink-bar-animated"
                          style="left: 0px; width: 174px;"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
