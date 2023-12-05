import { useState } from "react";
import { usePacienteEdit } from "../hooks/pacientes/editPaciente";
import { AtualizaModal } from "../atualizar-modal/atualiza-modal";

interface EditProps{
    nome: string,
    email: string,
    cpf: string
}


export function Edit({ nome, email, cpf} : EditProps){
    
    const [isModalOpen, setIsModalOpen]= useState(false);


    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev)
        console.log("testando")
    }
    return(
        
        <div>
        {isModalOpen && <AtualizaModal closeModal={handleOpenModal}cpf={cpf}email={email}/>} 
        <button className="editarbtn" onClick={handleOpenModal}>editar</button>
        </div>
       
    )
}