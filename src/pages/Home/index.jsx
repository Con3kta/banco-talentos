import React from 'react'
import './styles.css'
import CustomButton from '../../components/CustomButton';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            <main className='home-container'>
                <div className='register-content'>
                    <p>Você fez parte do Programadores Cariocas e quer deixar seu currículo no banco de talentos?</p>
                    <CustomButton text='Cadastrar currículo' onPress={() => navigate('/cadastro')} />
                </div>
                <div className='search-content'>
                    <div>
                        <p>Você faz parte de uma empresa ou iniciativa e quer contratar Programadores Cariocas?</p>
                        <CustomButton text='Pesquisar Programadores' variant="dark" onPress={() => navigate('/cadastro')} />
                    </div>
                </div>
                <div className='programadores-content'>
                    <p>Você é morador da cidade do Rio de Janeiro, e quer ser um programador?</p>
                    <p>A sua oportunidade começa aqui. Está aberta a pré-matrícula do projeto Programadores Cariocas. Através dessa iniciativa a Prefeitura do Rio de Janeiro disponibiliza bolsas de estudo, para que os participantes cursem bootcamps de desenvolvimento web fullstack (frontend + backend). Além disso, disponibiliza auxílio financeiro e computador para que os alunos tenham a capacidade de assistir as aulas. Os concluintes do curso ainda levam consigo os computadores para casa, para que possam seguir sua jornada de aprendizado e consigam seu emprego.</p>
                    <p>Caso tenha interesse em saber novidades sobre o Programa e participar das próximas etapas, acesse através do link de pré-matrícula a seguir:</p>
                    <CustomButton text='Se inscreva aqui' variant="secondary" />
                </div>
            </main>
        </>
    )
}
