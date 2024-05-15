import React from "react"
import "./input.scss"

const Input = ({ label, type, value, placeholder, onChange, callback, required = true }) => {
  const onKeyUp = (e) => {
    if (e.keyCode == 13) {
      callback()
    }
  }
  return (
    <div className="input">
      <input type={type} value={value} placeholder={placeholder} onChange={onChange} onKeyUp={onKeyUp} required={required} />
      {label &&
        <label>{label}</label>
      }
    </div>
  )
}
export default Input