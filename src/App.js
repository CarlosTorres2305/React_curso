import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'carlos'
  const newName = name.toUpperCase();
  const url = 'https://via.placeholder.com/150'

  function sum(a,b){
    return a + b
  }
  return (
    <div className="App">
      <h1>Olá React</h1>
      <p>Olá {newName}</p>
      <p>Soma: {sum(2,3)}</p>
      <img src={url} alt="minha Imagem" />
    </div>
  );
}

export default App;
