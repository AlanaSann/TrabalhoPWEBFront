import { useState } from 'react';
import { CardMedico } from '../components/cards/medicoCard';
import { useMedicoData } from '../components/hooks/medicos/getMedicos';
import { CreateModalMedico } from '../components/create-modal/create-modal-medico';

function Medico() {
    const {data} = useMedicoData();
    const [isModalOpen, setIsModalOpen]= useState(false);
  
    const handleOpenModal = () => {
      setIsModalOpen(prev => !prev)
    }
    
  
    console.log(data)
    return (
        <div className="container">
          <h1>Médicos</h1>
          <div className="card-grid">
          {data?.map(medicoData => 
            <CardMedico
              nome={medicoData.nome} 
              crm={medicoData.crm} 
              email={medicoData.email} 
              especialidade={medicoData.especialidade}
                
              />
          )}
          
        </div>
        {isModalOpen && <CreateModalMedico closeModal={handleOpenModal}/>} 
        <button className='btn-postar' onClick={handleOpenModal}>novo</button>
        </div>
    )
  }
  
  export default Medico
  