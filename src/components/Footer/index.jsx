import React from 'react'
import './styles.css'
import secretaria_logo from '../../assets/secretaria.png'

export default function Footer() {
  return (
    <footer className='footer-container'>
      <img src={secretaria_logo} className='secretaria-logo' alt="Logo da prefeitura junto com a secreteria." />
        <div className='footer-text'>
            <p>Desenvolvido por Programadores Cariocas, para Programadores Cariocas.</p>
            <p>Conheça o time de desenvolvimento.</p>
        </div>
    </footer>
  )
}
