import React, { useContext } from 'react';
import prog_logo from '../../assets/logo/LOGO-PROGRAMADORES_Prancheta 1-03.png';
import './navigation.css'
import { useNavigate } from 'react-router-dom';
import CustomButton from '../CustomButton';
import { LoginContext } from '../../contexts/LoginContext';
import { FiMenu } from "react-icons/fi";

export default function Navigation() {
    const { setShowOffCanvas } = useContext(LoginContext);
    const navigate = useNavigate();

    return (
        <nav className='navigation-container'>
            <div onClick={() => navigate('/')}>
                <img src={prog_logo} alt="programadores logo" />
                <span>/BANCO DE TALENTOS</span>
            </div>
            <CustomButton onPress={() => setShowOffCanvas(true)} text="Entrar" />
            <FiMenu className='menu-mobile-icon' />
        </nav>
    )
}
