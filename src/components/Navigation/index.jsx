import React from 'react';
import prog_logo from '../../assets/react.svg';
import './navigation.css'
import { useNavigate } from 'react-router-dom';
import CustomButton from '../CustomButton';

export default function Navigation() {
    const navigate = useNavigate();

    return (
        <nav className='navigation-container'>
            <div>
                {/* <img src={prog_logo} alt="programadores logo" onClick={() => navigate('/')} /> */}
                <span onClick={() => navigate('/')}>Programadores Cariocas</span>
                <span>/BANCO DE TALENTOS</span>
            </div>
            <CustomButton onClick={() => navigate('/cadastro')} text="Entrar" />
        </nav>
    )
}