import React from 'react'
import '../styles/form.scss'
import { useState } from 'react'

export const Input = ({ label, required, onchange }) => {
  // const [focus, setFocus] = useState(false)
  const [value, setValue] = useState('')
  return (
    <div className="inputstyle__InputField-f1ymr3-0 bCnJRk reusecore__input is-material ">
      <div className="field-wrapper">
        <input
          className="login-input"
          required={required}
          type={'text'}
          value={value}
          onchange={(e) => {
            setValue(e.target.value)
            onchange?.(e)
          }}
        />
        <label>{label}</label>
      </div>
    </div>
  )
}
