import './App.css';

function getName() {return window.prompt('Informe seu nome: ');}
const name = getName();

function App() {
  return (
    <div className="App">
      <h1>Seja bem-vindo, {name}!</h1>
    </div>
  );
}

export default App;
