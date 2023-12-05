import { useState } from 'react';
import { useConsultaData } from '../components/hooks/consulta/getConsulta';
import { CardConsulta } from '../components/cards/consultaCard';
import { CreateModalConsulta } from '../components/create-modal/create-modal-consulta';

function Consulta() {
    const {data} = useConsultaData();
    const [isModalOpen, setIsModalOpen]= useState(false);
  
    const handleOpenModal = () => {
      setIsModalOpen(prev => !prev)
    }
    
  
    console.log(data)
    return (
        <div className="container">
          <h1>Consultas</h1>
          <div className="card-grid">
          {data?.map(consultaData => 
            <CardConsulta
              idConsulta={consultaData.idConsulta} 
              crm={consultaData.crmMedico} 
              cpf={consultaData.cpfPaciente}
              horario={consultaData.horarioConsulta}
                
              />
          )}
          
        </div>
        {isModalOpen && <CreateModalConsulta closeModal={handleOpenModal}/>} 
        <button className='btn-postar' onClick={handleOpenModal}>cadastrar consulta</button>
        </div>
    )
  }
  
  export default Consulta
  