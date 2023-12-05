import "./cardConsulta.css"
import { useMedicoDelete } from "../hooks/medicos/delMedico";
import { useState } from "react";
import { CreateModalConsultaCancelar } from "../create-modal/create-consulta-cancelar";

interface ConsultaProps{
    crm: string,
    cpf: string,
    idConsulta: number,
    horario: string
}

export function CardConsulta({ crm , cpf, idConsulta,horario} : ConsultaProps){
    const {mutate, isSuccess} = useMedicoDelete();
    const submitExcluir = () => {
        mutate(crm)
    }

    const [isModalOpen, setIsModalOpen]= useState(false);


    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev)
        console.log("testando")
    }
    return(
        <>
        <div className="cardConsulta">
            
            <div className="texto">
            <p>Código da consulta: {idConsulta}</p>
            <p>CRM do médico: {crm}</p>
            <p>CPF do paciente: {cpf}</p>
            <p>Horário da consulta: {horario}</p>
            </div>
            

            <div className="butao">
            <button className="deletarbtn" onClick={handleOpenModal}>Cancelar</button>
            {isModalOpen && <CreateModalConsultaCancelar closeModal={handleOpenModal}consultaId={idConsulta}/>}
            </div>

        </div>
        </>
    )
}