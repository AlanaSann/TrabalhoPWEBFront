import { useState } from 'react';
import { Card } from '../components/cards/card';
import { usePacienteData } from '../components/hooks/pacientes/usePacienteData';
import { CreateModal } from '../components/create-modal/create-modal';

function Paciente() {
    const {data} = usePacienteData();
    const [isModalOpen, setIsModalOpen]= useState(false);
  
    const handleOpenModal = () => {
      setIsModalOpen(prev => !prev)
    }
    
  
    console.log(data)
    return (
        <div className="container">
          <h1>Pacientes</h1>
          <div className="card-grid">
          {data?.map(pacienteData => 
            <Card
              nome={pacienteData.nome} 
              cpf={pacienteData.cpf} 
              email={pacienteData.email} 
                
              />
          )}
          
        </div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>} 
        <button className='btn-postar' onClick={handleOpenModal}>novo</button>
        </div>
    )
  }
  
  export default Paciente
  