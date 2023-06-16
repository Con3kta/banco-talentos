import React, { useEffect, useRef, useState } from 'react'
import './styles.css'
import FormRegister from './FormRegister';
import { motion } from "framer-motion"

export default function Register() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('fiz')
  };

  return (
    <motion.main className='register-container'
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <FormRegister onSubmit={() => handleSubmit()} />
    </motion.main>
  )
}
