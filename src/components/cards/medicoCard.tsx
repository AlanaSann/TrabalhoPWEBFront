import "./cardMedico.css"
import { useMedicoDelete } from "../hooks/medicos/delMedico";
import { EditMedico } from "../botaoAtt/botaoAttMedico";

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
            <p>{nome}</p>
            <p>CRM: {crm}</p>
            <p>Email: {email}</p>
            <p>Especialidade: {especialidade}</p>
            </div>
            

            <div className="butao">
                <button className="deletarbtn" onClick={submitExcluir}>excluir</button>
                { <EditMedico
                    nome= {nome}
                    email={email}
                    crm= {crm}
                    especialidade={especialidade}
                /> }
            </div>

        </div>
        </>
    )
}