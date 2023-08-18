import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Contador from './pages/Contador';
import ListaTareas from './pages/ListaTareas';
import Formulario from './pages/Formulario';

function App() {
  return (
    <>
      <Contador></Contador>
      <ListaTareas></ListaTareas>
      <Formulario></Formulario>
    </>
  );
}

export default App;
