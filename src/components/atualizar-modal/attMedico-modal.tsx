import { useEffect, useState } from "react";
import { Endereco } from "../../interface/Endereco";
import { medicoProps, useMedicoEdit } from "../hooks/medicos/putMedicos";
import { MedicoData } from "../../interface/MedicoData";

interface InputProps{
    label: string,
    value: string | number,
    updateValue(value: any): void
}

interface ModalProps{
    crm: string,
    email: string,
    especialidade: string
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


export function AtualizaModalMedico({ closeModal,crm,email,especialidade}: ModalProps){
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState(0);
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");
    const [cep, setCep] = useState("");
    
    
    const {mutate, isSuccess} = useMedicoEdit();

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
            telefone,
            endereco,
            especialidade
        }

        const editaProps:medicoProps = {
            crm,
            medicoData
        }

        mutate(editaProps)
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
