import { useEffect, useState } from "react";
import "./modalCancelar.css"
import { ConsultaCancelamento } from "../../interface/ConsultaCancelamento";
import { useConsultaCancelar } from "../hooks/consulta/cancelarConsulta";

interface InputProps{
    label: string,
    value: string | number,
    updateValue(value: any): void
}

interface ModalProps{
    consultaId:number
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




export function CreateModalConsultaCancelar({ closeModal,consultaId}: ModalProps){
    const [motivo, setMotivo] = useState("");

    
    
    const {mutate, isSuccess} = useConsultaCancelar();

    const submit = () => {
        const consultaData: ConsultaCancelamento = {
           motivo,
           consultaId
        
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
                <h2>Cancelar consulta</h2>
                <form className="input-container">
                    <Input label="Motivo do cancelamento:" value={motivo} updateValue={setMotivo}/>
                </form>
                   <button onClick={submit} className="btn-secondary">Confirmar
                   </button>
                </div>
            </div>
    )
}

function closeModal() {
    throw new Error("Function not implemented.");
}
