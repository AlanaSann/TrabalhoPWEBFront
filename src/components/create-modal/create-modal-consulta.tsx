import { useEffect, useState } from "react";
import "./modal.css"
import { useConsultaDataMutate } from "../hooks/consulta/postConsulta";
import { ConsultaForm } from "../../interface/ConsultaForm";

interface InputProps{
    label: string,
    value: string | number,
    updateValue(value: any): void
}

interface ModalProps{
    closeModal(): void
}

const Input = ({label, value, updateValue}: InputProps) => {
    return(
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}




export function CreateModalConsulta({ closeModal}: ModalProps){
    const [cpf, setCpf] = useState("");
    const [crm, setCrm] = useState("");
    const [dataHora, setDataHora] = useState("");
    
    
    const {mutate, isSuccess} = useConsultaDataMutate();

    const submit = () => {
        const consultaData: ConsultaForm = {
            crm,
            cpf,
            dataHora
        }
        console.log(consultaData);
        
        mutate(consultaData)
    }

   useEffect(() => {
        if(!isSuccess) return 
            closeModal();
   }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastrar uma nova consulta</h2>
                <form className="input-container">
                    <Input label="CRM do médico:" value={crm} updateValue={setCrm}/>
                    <Input label="CPF do paciente:" value={cpf} updateValue={setCpf}/>
                    <Input label="Horario da consulta:" value={dataHora} updateValue={setDataHora}/>
                </form>
                   <button onClick={submit} className="btn-secondary">Cadastrar
                   </button>
                </div>
            </div>
    )
}

function closeModal() {
    throw new Error("Function not implemented.");
}
