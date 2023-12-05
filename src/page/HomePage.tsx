import { Link } from "react-router-dom";
import "./Home.css"
function Home() {
  return (
    <div className="caixa">

      <Link className="consultaLink" to="Consulta">Consulta</Link>
      <Link className="pacienteLink"to="Paciente">Paciente</Link>
      <Link className="medicoLink"to="Medico">Medico</Link>
    </div>
  );
}



export default Home;