import React, { useEffect, useRef, useState } from 'react'
import CustomButton from '../../../components/CustomButton';
import CustomFormInput from '../../../components/CustomFormInput';
import './styles.css'
import FormProfessional from '../FormProfessional';

export default function FormRegister({ onSubmit }) {
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
      <h2>Dados Pessoais</h2>
      <div className='form-container' >
        <CustomFormInput labelValue={"Nome Completo"} inputPattern="^[a-zA-Z\s]+$" placeHolder={"Digite seu nome completo..."} inputWarning="Insira apenas letras" />
        <CustomFormInput inputType={"text"} labelValue={"Data de Nascimento"} placeHolder={"Digite neste formato: 00/00/0000"} inputWarning="Insira no formato correto" />
        <CustomFormInput inputRef={inputCpf} onBlur={() => handleCheck()} labelValue={"CPF"} placeHolder={"Digite apenas números..."} inputPattern="[0-9]*" inputLength={11} inputWarning="Insira apenas números" />
      </div>
      <div className='form-container' >
        <label className='select-label' htmlFor="unidade" style={{ display: 'flex', flexDirection: 'column' }}>Selecione sua unidade SENAC
          <select name="unidade" id="unidade" className='select-content'>
            <option value="default">selecione</option>
            <option value="riachuelo">Centro Politécnico Riachuelo</option>
          </select>
        </label>
        <label className='select-label' htmlFor="turma" style={{ display: 'flex', flexDirection: 'column' }}>Selecione sua turma
          <select name="turma" id="turma" className='select-content'>
            <option value="default">selecione</option>
            <option value="riachuelo">Centro Politécnico Riachuelo</option>
          </select>
        </label>
        <label className='select-label' htmlFor="turno" style={{ display: 'flex', flexDirection: 'column' }}>Selecione seu turno
          <select name="turno" id="turno" className='select-content'>
            <option value="default">selecione</option>
            <option value="riachuelo">Centro Politécnico Riachuelo</option>
          </select>
        </label>
      </div>
      <h2>Credenciais de Acesso</h2>
      <div className='form-container register-account' >
        <CustomFormInput inputType={"email"} labelValue={"Insira seu Email"} placeHolder={"Digite seu email..."} inputWarning="Insira seu email: email@email.com" />
        <CustomFormInput inputType={"email"} labelValue={"Confirme seu Email"} placeHolder={"Digite novamente seu email..."} inputWarning="Insira seu email: email@email.com" />
      </div>
      <h2>Sua Experiência</h2>
      <div className='form-container professional-content' >
        <FormProfessional />
      </div>
      <h2>Termos de Uso</h2>
      <div className='form-container terms-content' style={{display: 'flex', flexDirection: 'column'}}>
        <label htmlFor="termos-de-uso-1">
          <input type="checkbox" name="termos-de-uso-1" id="termos-de-uso-1" />
          Declaro que fiz parte do Programa e contribuo para este banco com meus dados de boa fé.
        </label>
        <label htmlFor="termos-de-uso-2">
          <input type="checkbox" name="termos-de-uso-2" id="termos-de-uso-2" />
          Estou ciente que meus dados poderão ser acessados publicamente.
        </label>
      </div>
      <CustomButton text="Enviar Cadastro" style={{ marginTop: "2rem" }} />
    </form>
  )
}
