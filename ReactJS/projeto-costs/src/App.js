import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyname';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  const name = "Renan"

  function sum(a, b) {
    return a + b;
  }

  const url = 'https://via.placeholder.com/150'
 
  return (
    <div className="App">
       <h2>Alterando o JSX</h2>
       <p>Olá, {name}</p>
       <p>Soma: {sum(2 , 2)}</p>
       <img src={url} alt="Minha Imagem"></img>
       <HelloWorld/>
       <SayMyName nome={name}/>
       <Frase />
       <Pessoa nome={name} 
           foto={url} idade="10" 
           profissao="Programador"/>
       <List />
    </div>
  );
}

export default App;
