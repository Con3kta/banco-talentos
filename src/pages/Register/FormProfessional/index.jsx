import React, { useEffect, useRef, useState } from 'react'
import CustomFormInput from '../../../components/CustomFormInput';
import CustomButton from '../../../components/CustomButton';
import { motion } from "framer-motion"
import './styles.css'

const AcademicExperience = ({ index, onDelete }) => {
    const [formacao, setFormacao] = useState('');
    const formacaoRef = useRef(null);

    return (
        <>
            <motion.div
                className='academic-experience-container'
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
            >
                <h3>Experiência Acadêmica {index}</h3>
                <div className='basic-experience-content' style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <label className='select-label' htmlFor="formacao" style={{ display: 'flex', flexDirection: 'column' }}>Selecione sua Formação
                        <select ref={formacaoRef} name="formacao" id="formacao" className='select-content' onChange={(e) => setFormacao(e.target.value)}>
                            <option value="default">selecione</option>
                            <option value="medio">Médio</option>
                            <option value="tecnico">Técnico</option>
                            <option value="superior">Superior</option>
                        </select>
                    </label>
                    {formacao === 'superior' &&
                        <label className='select-label' htmlFor="grau" style={{ display: 'flex', flexDirection: 'column' }}>Selecione o Grau
                            <select name="grau" id="grau" className='select-content'>
                                <option value="default">selecione</option>
                                <option value="tecnologo">Técnologo</option>
                                <option value="graduacao">Graduação</option>
                                <option value="pos-graduacao">Pós-graduação</option>
                                <option value="mestrado">Mestrado</option>
                                <option value="doutorado">Doutorado</option>
                            </select>
                        </label>
                    }
                    <label className='select-label' htmlFor="status" style={{ display: 'flex', flexDirection: 'column' }}>Selecione o Status
                        <select name="status" id="status" className='select-content'>
                            <option value="default">selecione</option>
                            <option value="completo">Completo</option>
                            <option value="em-andamento">Em andamento</option>
                            <option value="incompleto">Incompleto</option>
                        </select>
                    </label>
                </div>
                {formacao === 'superior' || formacao === 'tecnico' ?
                    <div className='superior-experience-content' >
                        <CustomFormInput inputType={"text"} inputName={"instituicao"} labelValue={"Instituição"} placeHolder={"Nome da Instituição"} />
                        <CustomFormInput inputType={"text"} inputName={"curso"} labelValue={"Curso"} placeHolder={"Nome do Curso"} />
                    </div>
                    : null
                }
            </motion.div>
        </>
    )
}

export default function FormProfessional() {
    const [experience, setExperience] = useState([]);
    const [professional, setProfessional] = useState([]);

    const handleAddExperience = (e) => {
        e.preventDefault()
        if (e.target.id === 'academic') {
            setExperience([...experience, <AcademicExperience />])
        } else {
            setProfessional([...professional, <AcademicExperience />])
        }
    }

    const handleDeleteExperience = (index, e) => {
        if (e.target.id === 'academic') {
            const newArr = experience.filter((_, i) => i !== index);
            setExperience(newArr);
        } else {
            const newArr = professional.filter((_, i) => i !== index);
            setProfessional(newArr);
        }
    };

    useEffect(() => {
        setExperience(experience)
    }, [experience])

    return (
        <div className='experience-container'>
            <div className="academic-content">
                {experience.map((componente, index) => (
                    <div key={index}>{componente}
                        <CustomButton setId="academic" type={"button"} setKey={index} text={"Remover"} variant={"secondary"} style={{ margin: "1rem 0" }} onPress={(e) => handleDeleteExperience(index, e)} />
                    </div>
                ))}
                <CustomButton setId="academic" type={"button"} text={"Adicionar Experiência Acadêmica"} variant={"dark"} style={{ margin: "1rem 0" }} onPress={(e) => handleAddExperience(e)} />
            </div>
            <div className="professional-content">
                {professional.map((componente, index) => (
                    <div key={index}>{componente}
                        <CustomButton setId="professional" type={"button"} setKey={index} text={"Remover"} variant={"secondary"} style={{ margin: "1rem 0" }} onPress={(e) => handleDeleteExperience(index, e)} />
                    </div>
                ))}
                <CustomButton setId="professional" type={"button"} text={"Adicionar Experiência Profissional"} variant={"dark"} style={{ margin: "1rem 0" }} onPress={(e) => handleAddExperience(e)} />
            </div>
        </div>
    )
}
