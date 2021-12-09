import React from 'react'
import googlelogo from '../img/google_logo.jpg'
import '../styles/form.scss'
import { Input } from './input'

export const LoginForm = () => {
  return (
    <div>
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
        <span className="btn-text">Sign In with Google</span>
      </button>
      <Input label={'Email Address'} required />
      <Input label={'Password'} required />
      <div>
        <button
          type="button"
          className="buttonstyle__ButtonStyle-sc-13ebl9m-0 jvTmZB reusecore__button default"
          font-size="14px"
          font-weight="500"
        >
          <span className="btn-text">LOGIN</span>
        </button>
        <button
          type="button"
          class="buttonstyle__ButtonStyle-sc-13ebl9m-0 buIuSx reusecore__button"
          font-size="14px"
          font-weight="500"
          color="#10ac84"
        >
          <span class="btn-text">Forget Password</span>
        </button>
      </div>
    </div>
  )
}
