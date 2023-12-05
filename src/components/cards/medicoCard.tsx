import { Edit } from "../botaoAtt/botaoAtt";
import "./card.css"
import { useMedicoDelete } from "../hooks/medicos/delMedico";

interface MedicoProps{
    nome: string,
    email: string,
    crm: string,
    especialidade: string
}

export function CardMedico({ nome, email, crm,especialidade} : MedicoProps){
    const {mutate, isSuccess} = useMedicoDelete();
    const submitExcluir = () => {
        mutate(crm)
    }

    
    return(
        <>
        <div className="card">
            
            <div className="texto">
            <p><b>{nome}</b></p>
            <p>CRM: {crm}</p>
            <p>Email: {email}</p></div>
            <p>Especialidade: {especialidade}</p>

            <div className="butao">
                <button className="deletarbtn" onClick={submitExcluir}>excluir</button>
                {/* <Edit
                    nome= {nome}
                    email={email}
                    cpf= {crm}
                /> */}
            </div>

        </div>
        </>
    )
}