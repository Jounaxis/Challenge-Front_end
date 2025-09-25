import './globals.css'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import { Outlet } from 'react-router-dom'
import { ConsultasProvider } from './context/ConsultasContext'


function App() {
  return (
    <>
      <Cabecalho></Cabecalho>
        <ConsultasProvider>
          <Outlet/>
        </ConsultasProvider>
      <Rodape></Rodape>
    </>
  )
}

export default App
