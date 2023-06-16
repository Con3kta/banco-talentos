import React from 'react'
import './custom-button.css'

export default function CustomButton({text, type, onPress, variant, style}) {
  return (
    <button type={type} onClick={onPress} style={style && style} className={variant ? variant : "primary"}>{text}</button>
  )
}
