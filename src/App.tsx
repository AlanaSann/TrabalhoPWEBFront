import { useState } from 'react';
import './App.css'
import { Card } from './components/card';
import { PacienteData } from './interface/PacienteData';
import { usePacienteData } from './components/hooks/usePacienteData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
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

export default App
