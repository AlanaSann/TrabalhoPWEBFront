import { useEffect, useState } from "react";
import "./modal.css"
import { Endereco } from "../../interface/Endereco";
import { MedicoData } from "../../interface/MedicoData";
import { useMedicoDataMutate } from "../hooks/medicos/postMedico";

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


export function CreateModalMedico({ closeModal}: ModalProps){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [crm, setCrm] = useState("");
    const [especialidade, setEspecialidade] = useState("");
    const [telefone, setTelefone] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState(0);
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");
    const [cep, setCep] = useState("");
    
    
    const {mutate, isSuccess} = useMedicoDataMutate();

    const submit = () => {
        const endereco: Endereco ={
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            uf,
            cep
        }
        const medicoData: MedicoData = {
            crm,
            nome,
            email,
            especialidade,
            telefone,
            endereco
        }

        mutate(medicoData)
    }

   useEffect(() => {
        if(!isSuccess) return 
            closeModal();
   }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo médico</h2>
                <form className="input-container">
                    <Input label="nome" value={nome} updateValue={setNome}/>
                    <Input label="crm" value={crm} updateValue={setCrm}/>
                    <Input label="especialidade" value={especialidade} updateValue={setEspecialidade}/>
                    <Input label="email" value={email} updateValue={setEmail}/>
                    <Input label="telefone" value={telefone} updateValue={setTelefone}/>
                    <Input label="logradouro" value={logradouro} updateValue={setLogradouro}/>
                    <Input label="numero" value={numero} updateValue={setNumero}/>
                    <Input label="complemento" value={complemento} updateValue={setComplemento}/>
                    <Input label="bairro" value={bairro} updateValue={setBairro}/>
                    <Input label="cidade" value={cidade} updateValue={setCidade}/>
                    <Input label="uf" value={uf} updateValue={setUf}/>
                    <Input label="cep" value={cep} updateValue={setCep}/>
                </form>
                   <button onClick={submit} className="btn-secondary">Postar
                   </button>
                </div>
            </div>
    )
}

function closeModal() {
    throw new Error("Function not implemented.");
}
