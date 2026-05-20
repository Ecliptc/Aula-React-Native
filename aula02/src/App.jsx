import "./App.css";
import Exemplo1 from "./paginas/Exemplo1";
import Exemplo2 from "./paginas/Exemplo2";
import Exercicio1 from "./paginas/Exercicio1";
import Exercicio2 from "./paginas/Exercicio2";
import Exercicio3 from "./paginas/Exercicio3";

export default function App()
{
  return (
    <div>
      <h1>Aula 02 - Estudo de Componentes e Props</h1>
    
      <div className="card">
        <h3>Chamada para o Exemplo 1</h3>
      < Exemplo1 numero={33} />
       < Exemplo1 numero={43} />
        < Exemplo1 numero={2} />
      </div>
    
  

     <div className="card">
        <h3>Chamada para o Exemplo 2</h3>
      < Exemplo2 numero1={33} numero2={34} />
      < Exemplo2 numero1={42} numero2={-345} />
      < Exemplo2 numero1={4.5} numero2={6.8} />
      </div>
      

      <div className="card">;
        <h3>Chamada para o Exercicio 1</h3>
      < Exercicio1 fahrenheit={9} />
      < Exercicio1 fahrenheit={5} />
      </div>
      

    
      <div className="card">
        <h3>Chamada para o Exercicio 2</h3>
      < Exercicio2 peso={60} altura={194}/>
      < Exercicio2 peso={55} altura={155}/>
      </div>

      <div className="card">
        <h3>Chamada para o Exercicio 3</h3>
      < Exercicio3 nota1={7} nota2={9} />
      < Exercicio3 nota1={2} nota2={4} />
      </div>

      </div>



  )
}