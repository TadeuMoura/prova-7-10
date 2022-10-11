import './index.scss'
import { useState } from 'react'

export default function Paradas() {

    const[capacidade, setCapacidade] = useState(0)
    const[consumo, setConsumo] = useState (0)
    const[distancia, setDistancia] = useState(0)
    const[paradas, setParadas] = useState(0)

    function CalcularParadas (){
        let gasto = distancia / consumo
        let qtdparadas = gasto / capacidade
        setParadas(Math.ceil(qtdparadas))
    }

    return(
        <div>
            <h1>Não sabe o quanto deve parar??? Calcule agora mesmo aqui!!!</h1>
            <label>Capacidade em litros</label>
            <input onChange={e=> setCapacidade(e.target.value)}/>
            <label>Consumo em km's por litro</label>
            <input onChange={e=> setConsumo(e.target.value)}/>
            <label>Distância a percorrer</label>
            <input onChange={e=> setDistancia(e.target.value)}/>
            <button onClick={CalcularParadas}>CALCULAR DISTÂNCIA</button>
            <p>Quantidade de paradas: {paradas}</p>
        </div>
    )

}