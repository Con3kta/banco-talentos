import React, { useEffect, useState } from 'react'
import './styles.css'
import CustomFormInput from '../../components/CustomFormInput'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

// to enter in the account
const SingIn = ({ onSubmit }) => {
    const [status, setStatus] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        setStatus('');
        setShowPassword(false);
    }, [])

    return (
        <form onSubmit={onSubmit} className='sing-in-container'>
            <div className="sing-up-header">
                <h2>Entrar na plataforma.</h2>
            </div>
            <div className="sing-up-input-container">
                <CustomFormInput labelValue="Email" inputType="email" />
            </div>
            <div className="sing-up-input-container">
                <CustomFormInput
                    labelValue="Senha"
                    inputType={showPassword ? "text" : "password"}
                    inputMinLength={8}
                    icon={showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    onIconPress={() => setShowPassword(!showPassword)} />
                <p>Esqueceu sua senha?</p>
            </div>
            {status && <span>{status}</span>}
            <button type="submit">Entrar</button>
        </form>
    )
}

// to create a new account
const SingUp = ({ onSubmit }) => {
    const [status, setStatus] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        setStatus('');
        setShowPassword(false);
    }, [])

    return (
        <form onSubmit={onSubmit} className='sing-up-container'>
            <div className="sing-up-header">
                <h2>Faça parte!</h2>
                <h3>Crie sua conta agora.</h3>
            </div>
            <div className="sing-up-input-container">
                <CustomFormInput labelValue="Nome completo" />
            </div>
            <div className="sing-up-input-container">
                <CustomFormInput labelValue="Email" inputType="email" />
            </div>
            <div className="sing-up-input-container">
                <CustomFormInput
                    labelValue="Senha"
                    inputType={showPassword ? "text" : "password"}
                    inputMinLength={8}
                    icon={showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    onIconPress={() => setShowPassword(!showPassword)} />
                <span>{status}</span>
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    )
}

export default function Login() {
    const [isSingIn, setIsSingIn] = useState(true);

    return (
        <div className='login-container'>
            {isSingIn ?
                <>
                    <SingIn onSubmit={() => { }} />
                    <p
                        className='footer-text'
                        onClick={() => setIsSingIn(false)}>Não tem cadastro? <span>Cadastrar-se</span></p>
                </> :
                <>
                    <SingUp onSubmit={() => { }} />
                    <p
                        className='footer-text'
                        onClick={() => setIsSingIn(true)}>Você já possui cadastro? <span>Entrar</span></p>
                </>
            }
        </div>
    )
}
