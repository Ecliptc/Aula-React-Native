export default function Exercicio3(nota1, nota2, media)
{
    let media = Number(nota1 + nota2) / 2;
    
    return (
        <div>
            Nota 1 :{nota1}
            Nota2 : {nota2}
            Média : {media}.
        </div>
    )
}
