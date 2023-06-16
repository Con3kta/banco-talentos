import React, { useEffect, useRef, useState } from 'react'
import CustomButton from '../../../components/CustomButton';
import CustomFormInput from '../../../components/CustomFormInput';
import './styles.css'

export default function FormRegister({onSubmit}) {
  const inputCpf = useRef(null);

  const handleCheck = () => {
    let cpf = inputCpf.current.value;

    if (cpf.length === 11) {
      console.log(cpf)
    } else {
      return
    }
  }

  return (
    <form onSubmit={onSubmit} className="register-form">
        <h2>Sessão de Cadastro</h2>
        <div className='form-container' style={{ flexDirection: 'row' }}>
          <CustomFormInput labelValue={"Nome Completo"} inputPattern="^[a-zA-Z\s]+$" placeHolder={"Digite seu nome completo..."} inputWarning="Insira apenas letras" />
          <CustomFormInput inputType={"text"} labelValue={"Data de Nascimento"} placeHolder={"Digite neste formato: 00/00/0000"} inputWarning="Insira no formato correto" />
          <CustomFormInput inputRef={inputCpf} onBlur={() => handleCheck()} labelValue={"CPF"} placeHolder={"Digite apenas números..."} inputPattern="[0-9]*" inputLength={11} inputWarning="Insira apenas números" />
        </div>
        <div className='form-container' style={{ flexDirection: 'row' }}>
          <CustomFormInput labelValue={"Selecione sua unidade SENAC"} inputPattern="^[a-zA-Z\s]+$" placeHolder={"Digite o nome da unidade..."} inputWarning="Digite o nome da unidade" />
          <CustomFormInput inputType={"email"} labelValue={"Insira seu Email"} placeHolder={"Digite apenas números..."} inputWarning="Insira seu email: email@email.com" />
          <CustomFormInput inputType={"email"} labelValue={"Confirme seu Email"} placeHolder={"Digite apenas números..."} inputWarning="Insira seu email: email@email.com" />
        </div>
        <div className='form-container' style={{ flexDirection: 'row' }}>
          <CustomFormInput inputType={"password"} labelValue={"Insira uma senha"} placeHolder={"Digite sua senha..."} inputWarning="Mínimo 8 caractéres" inputMinLength={8}/>
          <CustomFormInput inputType={"password"} labelValue={"Confirme sua senha"} placeHolder={"Digite novamente sua senha..."} inputWarning="Mínimo 8 caractéres" inputMinLength={8}/>
        </div>
        <CustomButton text="Enviar Cadastro" style={{ marginTop: "2rem" }}/>
      </form>
  )
}
