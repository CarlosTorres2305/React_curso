import './App.css';
import Pessoa from './components/Pessoa.js'
import Frase from './components/Frase.js'
import Lista from './components/Lista.js'
function App() {
  
  return (
    <div className="App">
      <h1>Testando</h1>
      <Frase />
      <Frase/>
      <Pessoa 
      nome="Carlos" 
      idade="15"
      profissao="Analista.TI"
      foto="https://via.placeholder.com/150" />
      <Lista />
    </div>
  );
}

export default App;
