import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton';
import { useNavigate } from 'react-router-dom';
import CustomCarousel from '../../components/CustomCarousel';
import { TbBrandCss3, TbBrandJavascript, TbBrandHtml5 } from 'react-icons/tb';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import './styles.css'

export default function Home() {
    const navigate = useNavigate();

    const [language, setLanguage] = useState('');

    const getLanguageName = (e) => {
        setLanguage(e.target.id)
    }

    return (
        <>
            <CustomCarousel
                slide1={
                    <div className='carousel-item'>
                        <article className='register-content'>
                            <img src="https://prefeitura.rio/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-20-at-10.39.45.jpeg" alt="" />
                            <aside>
                                <h2>Você fez parte do Programadores Cariocas?</h2>
                                <h3>cadastre seu currículo no banco de talentos!</h3>
                                <CustomButton text='Cadastrar currículo' onPress={() => navigate('/cadastro')} />
                                <p>O Programadores Cariocas tem o objetivo de oferecer oportunidade de entrada no mercado de trabalho para os jovens mais vulneráveis. Além disso, também vai contribuir para reduzir o déficit de profissionais qualificados na área de linguagens de programação e minimizar desigualdades sociais.</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut enim vel exercitationem tempore consequatur quidem quis possimus dicta vitae dolor, voluptatibus et eveniet modi nam dolores porro facere, minima accusamus?</p>
                            </aside>
                        </article>
                    </div>
                }
                slide2={
                    <div className='carousel-item'>
                        <article className='search-content' >
                            <img src="https://pbs.twimg.com/media/FuqnNsUXsAENk_b?format=jpg&name=4096x4096" alt="" />
                            <aside>
                                <p>Somos mais de 900 profissionais formados como Desenvolvedores Full-stack no ano de 2023!</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut enim vel exercitationem tempore consequatur quidem quis possimus dicta vitae dolor, voluptatibus et eveniet modi nam dolores porro facere, minima accusamus?</p>
                                <h2>Quer contratar Programadores Cariocas?</h2>
                                <CustomButton text='Pesquisar Programadores' variant="dark" onPress={() => navigate('/buscar')} />
                                <p>Algumas das principais tecnologias:</p>
                                <div onMouseLeave={() => setLanguage('')}>
                                    <span className='icon' id='HTML5' onMouseEnter={(e) => getLanguageName(e)} >
                                        <TbBrandHtml5 />
                                    </span>
                                    <span className='icon' id='JavaScript' onMouseEnter={(e) => getLanguageName(e)} >
                                        <TbBrandJavascript />
                                    </span>
                                    <span className='icon' id='CSS3' onMouseEnter={(e) => getLanguageName(e)} >
                                        <TbBrandCss3 />
                                    </span>
                                    <span className='icon' id='MySQL' onMouseEnter={(e) => getLanguageName(e)} >
                                        <SiMysql />
                                    </span>
                                    <span className='icon' id='React JS' onMouseEnter={(e) => getLanguageName(e)} >
                                        <FaReact />
                                    </span>
                                    <span className='icon' id='Node JS' onMouseEnter={(e) => getLanguageName(e)} >
                                        <FaNodeJs />
                                    </span>
                                </div>
                                <p>{language}</p>
                            </aside>
                        </article>
                    </div>
                }
                slide3={
                    <div className='carousel-item'>
                        <article className='course-content'>
                            <img src="https://prefeitura.rio/wp-content/uploads/2022/03/JUVRio-e-SMDEIS-lancaram-o-Programadores-Cariocas-Foto-Hugo-Barreiro-4.jpeg" alt="programador carioca" />
                            <aside>
                                <h2>Você é morador da cidade do Rio de Janeiro, e quer ser um programador?</h2>
                                <p>A sua oportunidade começa aqui. Está aberta a pré-matrícula do projeto Programadores Cariocas. Através dessa iniciativa a Prefeitura do Rio de Janeiro disponibiliza bolsas de estudo, para que os participantes cursem bootcamps de desenvolvimento web fullstack (frontend + backend). Além disso, disponibiliza auxílio financeiro e computador para que os alunos tenham a capacidade de assistir as aulas. Os concluintes do curso ainda levam consigo os computadores para casa, para que possam seguir sua jornada de aprendizado e consigam seu emprego.</p>
                                <p>Caso tenha interesse em saber novidades sobre o Programa e participar das próximas etapas, acesse através do link de pré-matrícula a seguir:</p>
                                <CustomButton text='Se inscreva aqui' variant="secondary" />
                            </aside>
                        </article>
                    </div>
                }
            />
        </>
    )
}
