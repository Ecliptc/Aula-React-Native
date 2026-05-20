export default function Exercicio2( {altura, peso})
{
    let imc = Number(peso) / Number(altura) * Number(altura);
    
    return (
        <div>
            Peso = {peso}kg.
            Altura = {altura}m.
            O imc é {imc}.
        </div>
    )
}
