import './App.css';
import { ListaDeTareas } from './components/ListaDeTareas';
import { Logo } from './components/Logo'
import freeCodeCampLogo from './img/freecodecamp-logo.png';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <Logo src={freeCodeCampLogo} />
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
