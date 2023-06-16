import React, { useEffect, useRef, useState } from 'react'
import './styles.css'
import FormRegister from './FormRegister';

export default function Register() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('fiz')
  };

  return (
    <main className='register-container'>
      <FormRegister onSubmit={() => handleSubmit()}/>
    </main>
  )
}
