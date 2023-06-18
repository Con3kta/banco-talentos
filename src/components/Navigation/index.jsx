import React from 'react';
import prog_logo from '../../assets/logo/LOGO-PROGRAMADORES_Prancheta 1-03.png';
import './navigation.css'
import { useNavigate } from 'react-router-dom';
import CustomButton from '../CustomButton';

export default function Navigation() {
    const navigate = useNavigate();

    return (
        <nav className='navigation-container'>
            <div onClick={() => navigate('/')}>
                <img src={prog_logo} alt="programadores logo" />
                <span>/BANCO DE TALENTOS</span>
            </div>
            <CustomButton onClick={() => navigate('/cadastro')} text="Entrar" />
        </nav>
    )
}
