import React from 'react'
import './styles.css'
import pao_acucar from '../../assets/pao-de-acucar.png';

export default function Header() {
    return (
        <header className='home-header-container'>
            <h1>Programadores Cariocas</h1>
            <img src={pao_acucar} alt="pão de açúcar" />
        </header>
    )
}
