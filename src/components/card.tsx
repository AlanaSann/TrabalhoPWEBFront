import "./card.css"

interface CardProps{
    nome: string,
    email: string,
    cpf: string
}

export function Card({ nome, email, cpf} : CardProps){
    return(
        <div className="card">
            <p><b>{nome}</b></p>
            <p>CPF: {cpf}</p>
            <p>Email: {email}</p>
        </div>
    )
}