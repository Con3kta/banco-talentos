import React from 'react'
import './custom-button.css'

export default function CustomButton({text, type, setId, onPress, variant, style, setKey}) {
  return (
    <button id={setId} type={type} key={setKey} onClick={onPress} style={style && style} className={variant ? variant : "primary"}>{text}</button>
  )
}
