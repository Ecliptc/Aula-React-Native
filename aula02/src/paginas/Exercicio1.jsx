export default function Exercicio1( {fahrenheit})
{
    let celsius = Number(fahrenheit) - Number(32) * Number(5) / Number(9)
    return (
        <div>
            Celsius = {celsius}
        </div>
    )
}
