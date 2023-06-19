import React, { useEffect, useState } from 'react'
import './styles.css'
import CustomFormInput from '../../components/CustomFormInput'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';

// to enter in the account
const SingIn = ({ onSubmit, setController }) => {
    const [status, setStatus] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        setStatus('');
        setShowPassword(false);
    }, [])

    return (
        <motion.form
            onSubmit={onSubmit}
            initial={{ translateX: 1300, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className='sing-in-container'
        >
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
            <p
                className='footer-text'
                onClick={setController}>Não tem cadastro? <span>Cadastrar-se</span></p>
        </motion.form>
    )
}

// to create a new account
const SingUp = ({ onSubmit, setController }) => {
    const [status, setStatus] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        setStatus('');
        setShowPassword(false);
    }, [])

    return (
        <motion.form
            onSubmit={onSubmit}
            initial={{ translateX: 1300, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className='sing-up-container'
        >
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
            <p
                className='footer-text'
                onClick={setController}>Você já possui cadastro? <span>Entrar</span></p>
        </motion.form>
    )
}

export default function Login() {
    const [isSingIn, setIsSingIn] = useState(true);

    return (
        <div className='login-container'>
            <AnimatePresence>
                {isSingIn ?
                    <SingIn onSubmit={() => { }} setController={() => setIsSingIn(false)} />
                    :
                    <SingUp onSubmit={() => { }} setController={() => setIsSingIn(true)} />
                }
            </AnimatePresence>
        </div>
    )
}
