import React from 'react'
import './styles.css'

export default function CustomFormInput({
    inputStyle,
    labelFor,
    labelValue,
    inputType,
    inputName,
    inputId,
    inputRef,
    inputPattern,
    inputLength,
    inputMinLength,
    inputWarning,
    onBlur,
    placeHolder,
    icon,
    onIconPress
}) {
    return (
        <div className='form-input-container'>
            <label htmlFor={labelFor && labelFor}>{labelValue && labelValue}</label>
            <div>
                <input
                    ref={inputRef && inputRef}
                    type={inputType && inputType}
                    name={inputName && inputName}
                    id={inputId && inputId}
                    style={inputStyle && inputStyle}
                    pattern={inputPattern && inputPattern}
                    maxLength={inputLength && inputLength}
                    onBlur={onBlur && onBlur}
                    placeholder={placeHolder && placeHolder}
                    minLength={inputMinLength && inputMinLength}
                />
                {icon && <span className='icon-span' onClick={onIconPress}>{icon}</span>}
                {inputWarning && <span className='warning-span'>{inputWarning}</span>}
            </div>
        </div>
    )
}
