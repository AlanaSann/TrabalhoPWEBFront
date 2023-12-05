import { useState } from "react";
import { AtualizaModalMedico } from "../atualizar-modal/attMedico-modal";

interface MedicoProps{
    nome: string,
    email: string,
    crm: string,
    especialidade: string
}


export function EditMedico({ nome, email, crm,especialidade} : MedicoProps){
    
    const [isModalOpen, setIsModalOpen]= useState(false);


    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev)
        console.log("testando")
    }
    return(
        
        <>
        <button className="editarbtn" onClick={handleOpenModal}>editar</button>
        {isModalOpen && <AtualizaModalMedico closeModal={handleOpenModal}crm={crm}email={email}especialidade={especialidade}/>} 
        </>
       
    )
}