import { Link } from "react-router-dom";
import "./Home.css"
import  medicoLogo from "../components/icones/equipe-medica.jpg"
import  pacienteLogo from "../components/icones/paciente.png"
import consultaLogo from "../components/icones/mesa.png"

function Home() {
  return (
    <div className="tela">
      
      <div className="logoSite">
      <p className="consultorio"><b>Consultório</b> </p>
      </div>
    <div className="caixa">
      <img className="medicoLogo"src={medicoLogo} alt="Logo medicos" title="logo medicos"/> 
      <Link className="medicoLink" to="Medico">Médicos</Link>
    </div>

    <div className="caixa2">
      <img className="pacienteLogo"src={pacienteLogo} alt="Logo paciente" title="logo paciente"/> 
      <Link className="pacienteLink" to="Paciente">Pacientes</Link>
    </div>

    <div className="caixa3">
      <img className="consultaLogo"src={consultaLogo} alt="Logo consulta" title="Logo consulta"/>
      <Link className="consultaLink" to="Consulta">Consultas</Link>
    </div>
    </div>
    

    
  );
}



export default Home;