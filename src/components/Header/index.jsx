import React from 'react'
import './styles.css'
import programadores from '../../assets/logo/LOGO-PROGRAMADORES_Prancheta 1-04.png';

export default function Header() {
    return (
        <header className='home-header-container'>
            <div>
                <aside>
                    <h1>Boas vindas ao Banco de Talentos</h1>
                    <p>LOGO</p>
                </aside>
                <img src={programadores} alt="programadores logo" className='programadores-logo' />
            </div>
        </header>
    )
}
