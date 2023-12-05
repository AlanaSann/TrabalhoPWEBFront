import { Edit } from "../botaoAtt/botaoAtt";
import "./card.css"
import { usePacienteDelete } from "../hooks/pacientes/deletePaciente"
import { usePacienteEdit } from "../hooks/pacientes/editPaciente";

interface CardProps{
    nome: string,
    email: string,
    cpf: string
}

export function Card({ nome, email, cpf} : CardProps){
    const {mutate, isSuccess} = usePacienteDelete();
    const submitExcluir = () => {
        mutate(cpf)
    }

    
    return(
        <>
        <div className="card">
            
            <div className="texto">
            <p><b>{nome}</b></p>
            <p>CPF: {cpf}</p>
            <p>Email: {email}</p></div>

            <div className="butao">
                <button className="deletarbtn" onClick={submitExcluir}>excluir</button>
                <Edit
                    nome= {nome}
                    email={email}
                    cpf= {cpf}
                />
            </div>

        </div>
        </>
    )
}