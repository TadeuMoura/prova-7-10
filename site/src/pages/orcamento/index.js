import { useState } from 'react'
import './index.scss'

export default function Orcamento() {

    const[ganhos, setGanhos]        = useState(0)
    const[gastos, setGastos]        = useState(0)
    const[resultado, setResultado]  = useState("")

    function CalcularOrcamento () {
        
        let calcular = gastos/ganhos*100

        if(calcular >= 0 && calcular <= 20)
        setResultado('Parabéns, está gerenciando bem seu orçamento!')

        else if(calcular > 20 && calcular <= 50)
        setResultado('Muito bem, seus gastos não ultrapassam metade dos ganhos!')

        else if(calcular > 50 && calcular <= 80)
        setResultado('Atenção, melhor conter gastos!')

        else if(calcular > 80 && calcular <= 100)
        setResultado('Cuidado, seu orçamento pode ficar comprometido!')

        else if(calcular > 100)
        setResultado('Orçamento comprometido! Hora de rever seus gastos!')
    }

    return(
        <div>
            <label>Ganhos</label>
            <input onChange={e=> setGanhos(e.target.value)}/>
            <label>Gastos</label>
            <input onChange={e=> setGastos(e.target.value)}/>
            <button onClick={CalcularOrcamento}>CALCULAR</button>
            <p>{resultado}</p>
        </div>
    )
}