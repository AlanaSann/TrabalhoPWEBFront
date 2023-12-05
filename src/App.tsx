import { Route, Router, Routes } from 'react-router-dom';
import './App.css'
import Consulta from './page/Consulta';
import Medico from './page/Medico';
import Paciente from './page/Paciente';
import HomePage from './page/HomePage';

function App() {

  return (
    <div className="App">
      {/* <Header/> */}
        <Routes>
            <Route path='' element={ <HomePage/>}/>
            <Route path='/Consulta' element={<Consulta/>}/>
            <Route path='/Medico' element={<Medico/>}/>
            <Route path='/Paciente' element={<Paciente/>}/>
        </Routes>
  </div>
  )
}

export default App
