import React from 'react'
import modal_img from '../img/modal_img.jpg'
import form_logo from '../img/signUp_logo.png'
import { AiOutlineClose } from 'react-icons/ai'
import googlelogo from '../img/google_logo.jpg'

export const SignUP = ({ setOpen, open }) => {
  // const handleClose = setOpen(false)

  return (
    <div>
      <button
        className="button modal_closeBtn"
        onClick={() => {
          setOpen(false)
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
            <div className="Box_wrapper FormCol">
              <div className="Form_wrapper">
                <img src={form_logo} className="form_logo" />
                <div className="rc-tabs rc-tabs-top">
                  <div className="rc-tabs-nav">
                    <div className="rc-tabs-nav-wrap">
                      <div className="rc-tabs-nav-list">
                        <div className="rc-tabs-tab rc-tabs-tab-active">
                          <div
                            role="tab"
                            aria-selected="true"
                            className="rc-tabs-tab-btn"
                            tabindex="0"
                            id="rc-tabs-25-tab-loginForm"
                            aria-controls="rc-tabs-25-panel-loginForm"
                          >
                            LOGIN
                          </div>
                        </div>
                        <div className="rc-tabs-tab">
                          <div
                            role="tab"
                            aria-selected="false"
                            className="rc-tabs-tab-btn"
                            tabindex="0"
                            id="rc-tabs-25-tab-registerForm"
                            aria-controls="rc-tabs-25-panel-registerForm"
                          >
                            REGISTER
                          </div>
                        </div>
                        <div className="rc-tabs-ink-bar rc-tabs-ink-bar-animated"></div>
                      </div>
                    </div>
                  </div>
                  <div className="rc-tabs-content-holder">
                    <div className="rc-tabs-content rc-tabs-content-top rc-tabs-content-animated">
                      <div
                        role="tabpanel"
                        tabindex="-1"
                        aria-hidden="true"
                        className="rc-tabs-tabpane"
                        id="rc-tabs-10-panel-loginForm"
                        aria-labelledby="rc-tabs-10-tab-loginForm"
                      >
                        <h2 className="Heading__HeadingWrapper-sc-1r264sz-0 hFZzPK">
                          Welcome Folk
                        </h2>
                        <p
                          color="rgba(52, 61, 72, 0.8)"
                          font-size="15px"
                          letter-spacing="-0.025em"
                          className="Text__TextWrapper-sc-1vevv34-0 jNnKUu"
                        >
                          Welcome to Mate Family. Please login with your
                          personal account information letter.
                        </p>
                        <button
                          type="button"
                          className="buttonstyle__ButtonStyle-sc-13ebl9m-0 kKHiPr reusecore__button google-login__btn"
                          color="#343D48"
                        >
                          <span className="btn-icon">
                            <img
                              src={googlelogo}
                              alt="Google Icon"
                              className="Image__ImageWrapper-sc-1lwf601-0 liulOm"
                            />
                          </span>
                          <span className="btn-text">Sign up with Google</span>
                        </button>
                        <div className="inputstyle__InputField-f1ymr3-0 bCnJRk reusecore__input is-material ">
                          <div className="field-wrapper">
                            <input
                              id="full_name"
                              name="full_name"
                              type="text"
                              value=""
                            />
                          </div>
                          <span className="highlight"></span>
                          <label for="full_name">Full Name</label>
                        </div>
                        <div className="inputstyle__InputField-f1ymr3-0 bCnJRk reusecore__input is-material ">
                          <div className="field-wrapper">
                            <input
                              id="email_address"
                              name="email_address"
                              type="email"
                              value=""
                            />
                          </div>
                          <span className="highlight"></span>
                          <label for="email_address">Email Address</label>
                        </div>
                        <div className="inputstyle__InputField-f1ymr3-0 bCnJRk reusecore__input is-material ">
                          <div className="field-wrapper">
                            <input
                              id="password"
                              name="password"
                              type="text"
                              value=""
                            />
                          </div>
                          <span className="highlight"></span>
                          <label for="password">Password</label>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="buttonstyle__ButtonStyle-sc-13ebl9m-0 jvTmZB reusecore__button default"
                            font-size="14px"
                            font-weight="500"
                          >
                            <span className="btn-text">REGISTER</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
